import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../reducers/index';
import { Tile, Location } from '../models/Tile';
import { PuzzleAction } from '../actions/puzzle.action';
import { PuzzleTile } from "../models/PuzzleTile";
import { PuzzleGame, PuzzleGameStatus } from '../models/PuzzleGame';

@Injectable()
export class PuzzleService {

    private _defaultGrid: Tile[] = [];

    game: PuzzleGame;

    images = [
        prefixPath('/images/gallery/p1.jpg')
    ];
    tileSize: number = 160;

    constructor(private store: Store<AppState>,
                private puzzleAction: PuzzleAction) {
    }

    initialize() {
        this.createGame(this.images[0]);
    }

    createGame(gameImage: string) {
        let prepTiles = this.createPuzzleGrid();
        let tiles = this.mapTiles(prepTiles);
        this.game = new PuzzleGame(tiles, gameImage);

        this.updateState(this.game);
    }

    createPuzzleGrid() {
        let tileIndex = 0;
        let prepTiles: Tile[] = [];

        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                prepTiles.push(new Tile(++tileIndex, new Location(this.tileSize * x, this.tileSize * y)));
            }
        }
        this._defaultGrid = prepTiles;

        return prepTiles;
    }

    mapTiles(prepTiles: Tile[]) {
        let tiles: PuzzleTile[] = [];

        prepTiles
            .map((tile: Tile) => {
                tiles.push(new PuzzleTile(tile));
            });

        return tiles;
    }

    updateState(game: PuzzleGame) {
        this.store.dispatch(this.puzzleAction.updateState(game));
    }

    shuffle() {
        this.game.board = shuffleArray(this.game.board);
        this._defaultGrid.map((tile, i)=> {
            this.game.board[i].current = this._defaultGrid[i];
        });
        this.game.isStart = PuzzleGameStatus.START;

        this.updateState(this.game);
    }

    updateImage(index: number) {
        this.createGame(this.images[index])
    }
}

const prefixPath = (path: string) => {
    return '/public' + path;
};

function shuffleArray <T>(array: T[]): T[] {
    let tmpArray: T[] = Object.assign([], array);
    for(let i = 0; i < tmpArray.length; i++) {
        let r = rand(i, tmpArray.length);
        let tmp = tmpArray[i];
        tmpArray[i] = tmpArray[r];
        tmpArray[r] = tmp;
    }
    return tmpArray;
}

function rand(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
}