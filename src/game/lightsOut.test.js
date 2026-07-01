import { describe, expect, it } from 'vitest';
import {
  applyToggle,
  createSolvedBoard,
  generateSolvableBoard,
  getNeighborIndices,
  isSolved,
} from './lightsOut.js';

describe('createSolvedBoard', () => {
  it('creates an all-off board of the correct length', () => {
    const board = createSolvedBoard(4);
    expect(board).toHaveLength(16);
    expect(board.every((cell) => cell === false)).toBe(true);
  });
});

describe('getNeighborIndices', () => {
  const size = 4;

  it('includes only self, right, and down for a corner cell', () => {
    expect(getNeighborIndices(0, size).sort()).toEqual([0, 1, 4].sort());
  });

  it('includes self, left, right, and down for a top-edge cell', () => {
    expect(getNeighborIndices(1, size).sort()).toEqual([0, 1, 2, 5].sort());
  });

  it('includes all four neighbors plus self for a center cell', () => {
    expect(getNeighborIndices(5, size).sort()).toEqual([1, 4, 5, 6, 9].sort());
  });
});

describe('applyToggle', () => {
  it('flips self and orthogonal neighbors without mutating the input', () => {
    const board = createSolvedBoard(3);
    const next = applyToggle(board, 4, 3); // center of 3x3
    expect(board.every((cell) => cell === false)).toBe(true); // unchanged
    expect(next).toEqual([false, true, false, true, true, true, false, true, false]);
  });
});

describe('isSolved', () => {
  it('is true only when every cell is off', () => {
    expect(isSolved(createSolvedBoard(3))).toBe(true);
    expect(isSolved(applyToggle(createSolvedBoard(3), 0, 3))).toBe(false);
  });
});

describe('generateSolvableBoard', () => {
  it('never returns an already-solved board', () => {
    const alwaysZero = () => 0; // would degenerate to repeatedly toggling index 0
    const board = generateSolvableBoard(3, alwaysZero);
    expect(isSolved(board)).toBe(false);
  });

  it('produces a board reachable from solved by replaying the same moves', () => {
    const size = 5;
    const moveCount = Math.floor(size * size * 0.6);
    const sequence = Array.from({ length: moveCount }, (_, i) => (i * 7) % (size * size));
    let calls = 0;
    const scripted = () => sequence[calls++] / (size * size);

    const scrambled = generateSolvableBoard(size, scripted);

    let replayed = scrambled;
    for (const index of sequence) {
      replayed = applyToggle(replayed, index, size);
    }
    expect(isSolved(replayed)).toBe(true);
  });
});
