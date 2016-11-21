import { Action } from '@ngrx/store';

import { IPuzzle } from '../models/IPuzzle';
import { PuzzleAction } from '../actions/puzzle.action';
import { PuzzleTile } from "../models/PuzzleTile";

const initialState = {
    tiles: <PuzzleTile[]>[],
    goal: false,
    image: '#',
    tileSize: 160
};

export type PuzzleState = IPuzzle;

export const puzzleReducer = (state: IPuzzle = initialState, action: Action): PuzzleState => {
    switch (action.type) {
        case PuzzleAction.UPDATE_STATE:
            return action.payload;
        default: {
            return state;
        }
    }
};