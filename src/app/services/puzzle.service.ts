import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../reducers/index';
import { Tile, Location } from '../models/Tile';
import { PuzzleAction } from '../actions/puzzle.action';
import { PuzzleTile } from "../models/PuzzleTile";

@Injectable()
export class PuzzleService {

    private _prepTiles: Tile[] = [];

    images = [
        prefixPath('/images/gallery/p1.jpg')
    ];
    tileSize: number = 160;
    puzzleImage: string;
    tiles: PuzzleTile[] = [];

    constructor(private store: Store<AppState>,
                private puzzleAction: PuzzleAction) {
    }

    initialize() {
        this.puzzleImage = this.images[0];

        this.createPuzzleGrid();

        this.mapTiles();
        this.shuffle();

        this.updateState();
    }

    createPuzzleGrid() {
        let tileIndex = 0;
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                this._prepTiles.push(new Tile(++tileIndex, new Location(this.tileSize * x, this.tileSize * y)));
            }
        }
    }

    updateState() {
        this.store.dispatch(this.puzzleAction.updateState(
            {
                tiles   : this.tiles,
                goal    : false,
                image   : this.puzzleImage,
                tileSize: this.tileSize
            }
        ));
    }

    mapTiles() {
        this.tiles = <PuzzleTile[]>[];
        this._prepTiles
            .map((tile: Tile) => {
                this.tiles.push(new PuzzleTile(tile));
            });
    }

    shuffle() {
        this.tiles.sort(() => {
            return Math.random() - 0.5;
        });
        console.log(this._prepTiles);
        console.log(this.tiles);
        this._prepTiles.map((tile, i)=> {
            this.tiles[i].current = this._prepTiles[i];
        });
    }

    updateImage(index: number) {
        this.puzzleImage = this.images[index];
        this.updateState();
    }
}

const prefixPath = (path: string) => {
    return '/public' + path;
};