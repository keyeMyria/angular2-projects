import { PuzzleTile } from './PuzzleTile';

export enum PuzzleGameStatus {
    BUILD = 0,
    START = 1,
    END = 2
}

export class PuzzleGame {

    isStart: PuzzleGameStatus;
    board: PuzzleTile[];
    puzzleSize: number;
    puzzleImage: string;

    constructor(board: PuzzleTile[],
                pImage: string,
                pSize: number = 160) {
        this.isStart = PuzzleGameStatus.BUILD;
        this.board = board;
        this.puzzleImage = pImage;
        this.puzzleSize = pSize
    }
}