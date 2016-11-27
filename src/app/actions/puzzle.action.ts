import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { PuzzleGame } from '../models/PuzzleGame';

@Injectable()
export class PuzzleAction {
    static UPDATE_STATE = 'update';

    updateState(newState: PuzzleGame): Action {
        return {
            type: PuzzleAction.UPDATE_STATE,
            payload: newState
        }
    }
}