import { Component, AfterContentInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { PuzzleService } from '../../services/puzzle.service';
import { AppState } from '../../reducers/index';
import { Observable } from 'rxjs/Rx';
import { PuzzleTile } from '../../models/PuzzleTile';

@Component({
    selector: 'game',
    template: `
        <board [state]="puzzleState | async" (move)="move($event)"></board>
        <p>Moves: {{puzzle.game.moves}}</p>
        <button style="position: absolute; right: 30px; top: 35px;" (click)="puzzle.shuffle()">Shuffle</button>
    `
})
export class GameComponent implements AfterContentInit {

    puzzleState: Observable<any>;

    constructor(private puzzle: PuzzleService,
                private store: Store<AppState>) {
        this.puzzleState = store.select('puzzle');
    }

    ngAfterContentInit() {
        this.puzzle.initialize();
    }

    move(tile: PuzzleTile) {
        this.puzzle.move(tile);
    }
}