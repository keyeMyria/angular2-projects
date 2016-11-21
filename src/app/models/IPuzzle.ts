import { PuzzleTile } from "./PuzzleTile";

export interface IPuzzle {
    tiles: PuzzleTile[];
    goal: boolean;
    image: string;
    tileSize: number;
}