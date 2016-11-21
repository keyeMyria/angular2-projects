import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../reducers/index';
import { Tile, Location } from '../models/Tile';
import { PuzzleAction } from '../actions/puzzle.action';

@Injectable()
export class PuzzleService {

    images = [
        prefixPath('/images/gallery/p1.jpg')
    ];
    tileSize: number = 160;
    puzzleImage: string;
    tiles: Tile[] = [];

    constructor(private store: Store<AppState>,
                private puzzleAction: PuzzleAction) {
    }

    initialize() {
        this.puzzleImage = this.images[0];

        let tileIndex = 0;
        for(let x = 0; x < 3; x++) {
            for(let y = 0; y < 3; y++) {
                this.tiles.push(new Tile(++tileIndex, new Location(this.tileSize * x, this.tileSize * y)));
            }
        }

        this.updateState();
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

    updateImage(index: number) {
        this.puzzleImage = this.images[index];
        this.updateState();
    }
}

const prefixPath = (path: string) => {
    return '/public' + path;
};