import { PuzzleTile } from './PuzzleTile';
import { Tile, Location } from './Tile';
import { GameUtils } from '../utils/GameUtils';
import { IPuzzleGame } from './IPuzzle';

export enum PuzzleGameStatus {
    BUILD = 0,
    START = 1,
    END = 2
}

export class PuzzleGame implements IPuzzleGame {

    private _prepTiles: Tile[] = [];

    isStart: PuzzleGameStatus;
    board: PuzzleTile[];
    puzzleSize: number;
    puzzleImage: string;
    moves: number = 0;

    constructor(pImage: string,
                pSize: number = 160) {
        this.isStart = PuzzleGameStatus.BUILD;
        this.puzzleImage = pImage;
        this.puzzleSize = pSize;

        this.initialize();
    }

    initialize() {
        this._prepTiles = this.createDefaultPuzzleGrid();
        this.board = this.mapTiles(this._prepTiles);
    }

    createDefaultPuzzleGrid(): Tile[] {
        let tileIndex = 0;
        let prepTiles: Tile[] = [];

        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                prepTiles.push(new Tile(++tileIndex, new Location(this.puzzleSize * x, this.puzzleSize * y)));
            }
        }

        return prepTiles;
    }

    mapTiles(prepTiles: Tile[]): PuzzleTile[] {
        let tiles: PuzzleTile[] = [];

        prepTiles
            .map((tile: Tile) => {
                tiles.push(new PuzzleTile(tile));
            });

        return tiles;
    }

    shuffle(): void {
        this.board = GameUtils.shuffleArray(this.board);
        this._prepTiles.map((tile: Tile, i: number) => {
            this.board[i].current = this._prepTiles[i];
        });
        this.isStart = PuzzleGameStatus.START;
        this.moves = 0;
    }

    move(tile: PuzzleTile): void {
        this.moves++;
        
        let blankTile = this._getBlankTile();
        let isMove = this.checkMove(blankTile.current.location, tile.current.location);

        if(!isMove) return;
        this._swapTile(blankTile, tile);

        let isSolve = this._isSolved();
        if(isSolve) {
            this.isStart = PuzzleGameStatus.END;
            return;
        }
    }

    private _isSolved(): boolean {
        return this.board
            .every((item: PuzzleTile) => {
                return item.current.index === item.goal.index;
        });
    }

    private checkMove(blankLoc: Location, tileLoc: Location) {
        if(blankLoc.left === tileLoc.left) {
            if(tileLoc.top - this.puzzleSize === blankLoc.top) {
                //console.log('Up');
            } else if(tileLoc.top + this.puzzleSize === blankLoc.top) {
                //console.log('Down');
            } else {
                //console.log(`Can't move this, too far`);
                return false;
            }
        } else if(blankLoc.top === tileLoc.top) {
            if(tileLoc.left - this.puzzleSize === blankLoc.left) {
                //console.log('Left');
            } else if(tileLoc.left + this.puzzleSize === blankLoc.left) {
                //console.log('Right');
            } else {
                //console.log(`Can't move this, too far`);
                return false;
            }
        } else {
            //console.log(`Can't move this, too far`);
            return false;
        }

        return true;
    }

    private _getBlankTile(): PuzzleTile {
        return this.board
            .filter((item: PuzzleTile) => {
                return item.isBlank;
            })[0];
    }

    private _swapTile(a: PuzzleTile, b: PuzzleTile) {
        let tmp = a.current;
        a.current = b.current;
        b.current = tmp;
    }
}