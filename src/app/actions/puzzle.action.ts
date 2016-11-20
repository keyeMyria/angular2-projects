import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { IPuzzle } from '../models/IPuzzle';

@Injectable()
export class PuzzleAction {
    static UPDATE_STATE = 'update';

    updateState(newState: IPuzzle): Action {
        return {
            type: PuzzleAction.UPDATE_STATE,
            payload: newState
        }
    }
}