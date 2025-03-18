import { describe, it, expect } from "vitest";
import { calculateWinner } from "../../src/App"; // Adjust import if needed

describe("calculateWinner function", () => {
  it("returns 'X' when X wins horizontally", () => {
    const board = ["X", "X", "X", null, null, null, null, null, null];
    expect(calculateWinner(board)).toBe("X");
  });

  it("returns '0' when 0 wins vertically", () => {
    const board = ["0", null, null, "0", null, null, "0", null, null];
    expect(calculateWinner(board)).toBe("0");
  });

  it("returns 'X' when X wins diagonally", () => {
    const board = ["X", null, null, null, "X", null, null, null, "X"];
    expect(calculateWinner(board)).toBe("X");
  });

  it("returns '0' when 0 wins diagonally", () => {
    const board = [null, null, "0", null, "0", null,"0", null, null];
    expect(calculateWinner(board)).toBe("0");
  });

  it("returns null when there is no winner", () => {
    const board = ["X","0","X", "X", "0", "0", "0", "X", "X"];
    expect(calculateWinner(board)).toBe(null);
  });

  it("returns null for an empty board", () => {
    const board = Array(9).fill(null);
    expect(calculateWinner(board)).toBe(null);
  });

  it("work with a partially filled board", () => {
    const board = ["X", "0", null, "0", "X", null, null, null, null];
    expect(calculateWinner(board)).toBe(null);
  });
});