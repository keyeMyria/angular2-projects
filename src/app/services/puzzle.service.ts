import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../reducers/index';
import { Tile } from '../models/Tile';
import { PuzzleAction } from '../actions/puzzle.action';

@Injectable()
export class PuzzleService {

    images = [
        prefixPath('/images/gallery/p1.jpg'),
        prefixPath('/images/gallery/p2.jpg')
    ];
    puzzleImage: string;

    constructor(private store: Store<AppState>,
                private puzzleAction: PuzzleAction) {
    }

    initialize() {
        this.puzzleImage = this.images[0];
        this.updateState();
    }

    updateState() {
        this.store.dispatch(this.puzzleAction.updateState(
            {
                tiles   : <Tile[]>[],
                goal    : false,
                image   : this.puzzleImage,
                tileSize: 105
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