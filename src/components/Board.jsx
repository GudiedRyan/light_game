import Cell from './Cell.jsx';
import './Board.css';

function Board({ size, board, onCellToggle, disabled }) {
  return (
    <div
      className="board"
      style={{ '--board-size': size }}
      data-disabled={disabled}
    >
      {board.map((on, index) => (
        <Cell key={index} index={index} on={on} onToggle={onCellToggle} />
      ))}
    </div>
  );
}

export default Board;
