import { Routes } from '@angular/router';

import { GamesComponent } from './games.component';
import { SNAKE_COMPONENT, SNAKE_ROUTING } from './snake';
import { SUDOKU_COMPONENT, SUDOKU_ROUTING } from './sudoku';

export const GAMES_COMPONENT = [
    GamesComponent,
    ...SNAKE_COMPONENT,
    ...SUDOKU_COMPONENT
];

export const GAMES_ROUTING: Routes = [
    {
        path: 'games',
        component: GamesComponent,
        children: [
            ...SUDOKU_ROUTING,
            ...SNAKE_ROUTING
        ]
    }
];