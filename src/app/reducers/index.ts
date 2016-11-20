import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';

import { puzzleReducer, PuzzleState } from './puzzle.reducer';

export interface AppState {
    puzzle: PuzzleState
}

export default compose(combineReducers)({
    puzzle: puzzleReducer
});