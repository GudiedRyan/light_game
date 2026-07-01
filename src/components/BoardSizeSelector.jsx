import './BoardSizeSelector.css';

function BoardSizeSelector({ size, onChange, min = 3, max = 8 }) {
  const options = Array.from({ length: max - min + 1 }, (_, i) => min + i);

  return (
    <label className="board-size-selector">
      Board size
      <select
        value={size}
        onChange={(event) => onChange(Number(event.target.value))}
      >
        {options.map((n) => (
          <option key={n} value={n}>
            {n} x {n}
          </option>
        ))}
      </select>
    </label>
  );
}

export default BoardSizeSelector;
