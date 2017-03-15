import { Routes } from '@angular/router';
import { GamesComponent } from './games.component';
import { SudokuComponent } from './sudoku/sudoku.component';

export const GAMES_COMPONENT = [
    GamesComponent,
    SudokuComponent
];

export const GAMES_ROUTING: Routes = [
    {
        path: 'games',
        component: GamesComponent,
        children: [
            { path: 'sudoku', component: SudokuComponent }
        ]
    }
];