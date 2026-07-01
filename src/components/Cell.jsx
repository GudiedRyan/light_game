import './Cell.css';

function Cell({ index, on, onToggle }) {
  return (
    <button
      type="button"
      className="cell"
      data-on={on}
      aria-pressed={on}
      aria-label={`Light ${index + 1}, ${on ? 'on' : 'off'}`}
      onClick={() => onToggle(index)}
    />
  );
}

export default Cell;
