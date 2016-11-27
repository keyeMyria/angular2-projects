import { Action } from '@ngrx/store';

import { IPuzzleGame } from '../models/IPuzzle';
import { PuzzleAction } from '../actions/puzzle.action';
import { PuzzleTile } from "../models/PuzzleTile";

const initialState = {
    board: <PuzzleTile[]>[],
    isStart: 0,
    puzzleImage: '#',
    puzzleSize: 160
};

export type PuzzleGameState = IPuzzleGame;

export const puzzleReducer = (state: IPuzzleGame = initialState, action: Action): PuzzleGameState => {
    switch (action.type) {
        case PuzzleAction.UPDATE_STATE:
            return action.payload;
        default: {
            return state;
        }
    }
};