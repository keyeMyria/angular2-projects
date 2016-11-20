import { Action } from '@ngrx/store';

import { Tile } from '../models/Tile';
import { IPuzzle } from '../models/IPuzzle';
import { PuzzleAction } from '../actions/puzzle.action';

const initialState = {
    tiles: <Tile[]>[],
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