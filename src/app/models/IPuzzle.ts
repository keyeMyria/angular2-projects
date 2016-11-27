import { PuzzleTile } from "./PuzzleTile";

export interface IPuzzleGame {
    isStart: number;
    board: PuzzleTile[];
    puzzleImage: string;
    puzzleSize: number;
}