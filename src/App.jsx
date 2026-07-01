import { useReducer } from 'react';
import { applyToggle, generateSolvableBoard, isSolved } from './game/lightsOut.js';
import Board from './components/Board.jsx';
import BoardSizeSelector from './components/BoardSizeSelector.jsx';
import WinBanner from './components/WinBanner.jsx';
import './App.css';

const DEFAULT_SIZE = 3;

function createInitialState(size) {
  return { size, board: generateSolvableBoard(size) };
}

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_CELL':
      return { ...state, board: applyToggle(state.board, action.index, state.size) };
    case 'NEW_GAME':
      return { ...state, board: generateSolvableBoard(state.size) };
    case 'SET_SIZE':
      return createInitialState(action.size);
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, DEFAULT_SIZE, createInitialState);
  const won = isSolved(state.board);

  return (
    <div className="app">
      <header>
        <h1>Light Game</h1>
        <p>
          Click the lights to turn them off. Each click toggles that light and its
          orthogonal neighbors. Turn off every light to win.
        </p>
      </header>

      <div className="controls">
        <BoardSizeSelector
          size={state.size}
          onChange={(size) => dispatch({ type: 'SET_SIZE', size })}
        />
        <button type="button" onClick={() => dispatch({ type: 'NEW_GAME' })}>
          New Game
        </button>
      </div>

      <Board
        size={state.size}
        board={state.board}
        disabled={won}
        onCellToggle={(index) => dispatch({ type: 'TOGGLE_CELL', index })}
      />

      <WinBanner visible={won} onNewGame={() => dispatch({ type: 'NEW_GAME' })} />
    </div>
  );
}

export default App;
