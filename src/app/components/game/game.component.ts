import { Component, AfterContentInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { PuzzleService } from '../../services/puzzle.service';
import { AppState } from '../../reducers/index';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'game',
    template: `<board [state]="puzzleState | async"></board>`
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
}