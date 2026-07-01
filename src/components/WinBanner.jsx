import './WinBanner.css';

function WinBanner({ visible, onNewGame }) {
  return (
    <div className={`win-banner${visible ? ' visible' : ''}`}>
      <p>You win!</p>
      <button type="button" onClick={onNewGame}>
        New Game
      </button>
    </div>
  );
}

export default WinBanner;
