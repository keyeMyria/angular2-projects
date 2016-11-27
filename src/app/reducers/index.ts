import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';

import { puzzleReducer, PuzzleGameState } from './puzzle.reducer';

export interface AppState {
    puzzle: PuzzleGameState
}

export default compose(combineReducers)({
    puzzle: puzzleReducer
});