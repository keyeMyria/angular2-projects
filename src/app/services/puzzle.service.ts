import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../reducers/index';
import { PuzzleAction } from '../actions/puzzle.action';
import { PuzzleGame } from '../models/PuzzleGame';
import { PuzzleTile } from '../models/PuzzleTile';

@Injectable()
export class PuzzleService {

    game: PuzzleGame;

    images = [
        prefixPath('/images/gallery/p1.jpg'),
        prefixPath('/images/gallery/p2.jpg')
    ];

    constructor(private store: Store<AppState>,
                private puzzleAction: PuzzleAction) {
    }

    initialize(): void {
        this.createGame(this.images[0]);
    }

    createGame(gameImage: string): void {
        this.game = new PuzzleGame(gameImage, this.getPuzzleSize());
        this.updateState(this.game);
    }

    updateState(game: PuzzleGame): void {
        this.store.dispatch(this.puzzleAction.updateState(game));
    }

    shuffle(): void {
        this.game.shuffle();
        this.updateState(this.game);
    }

    updateImage(index: number): void {
        if(this.game.puzzleImage === this.images[index]) return;
        this.createGame(this.images[index])
    }

    move(tile: PuzzleTile) {
        this.game.move(tile);
        this.updateState(this.game);
    }

    getPuzzleSize(): number {
          console.log(document.body.clientWidth);
          
          let dHeight = document.body.clientHeight;

          if(dHeight > 768) {
              return 200;
          }

          return 140;
    }
}

const prefixPath = (path: string) => {
    return '/public' + path;
};