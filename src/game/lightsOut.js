export function createSolvedBoard(size) {
  return new Array(size * size).fill(false);
}

export function getNeighborIndices(index, size) {
  const row = Math.floor(index / size);
  const col = index % size;
  const neighbors = [index];
  if (row > 0) neighbors.push(index - size);
  if (row < size - 1) neighbors.push(index + size);
  if (col > 0) neighbors.push(index - 1);
  if (col < size - 1) neighbors.push(index + 1);
  return neighbors;
}

export function applyToggle(board, index, size) {
  const next = board.slice();
  for (const i of getNeighborIndices(index, size)) {
    next[i] = !next[i];
  }
  return next;
}

export function isSolved(board) {
  return board.every((cell) => cell === false);
}

export function generateSolvableBoard(size, randomFn = Math.random) {
  let board = createSolvedBoard(size);
  const moveCount = Math.max(1, Math.floor(size * size * 0.6));
  for (let i = 0; i < moveCount; i++) {
    board = applyToggle(board, Math.floor(randomFn() * size * size), size);
  }
  return isSolved(board) ? generateSolvableBoard(size, randomFn) : board;
}
