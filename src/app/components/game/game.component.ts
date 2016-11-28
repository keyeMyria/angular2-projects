import { Component, AfterContentInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { PuzzleService } from '../../services/puzzle.service';
import { AppState } from '../../reducers/index';
import { Observable } from 'rxjs/Rx';
import { PuzzleTile } from '../../models/PuzzleTile';

@Component({
    selector: 'game',
    template: `
        <div class="game-info">
            <div>Moves: 
                <span class="move-count">{{puzzle.game.moves}}</span>
            </div>
        </div>
        
        <board [state]="puzzleState | async" (move)="move($event)"></board>

        <div class="game-control">
            <button class="btn btn-default b-rd-md" (click)="puzzle.shuffle()">Shuffle</button>
        </div>
        
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