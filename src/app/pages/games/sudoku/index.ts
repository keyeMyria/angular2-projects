import { Routes } from '@angular/router';
import { SudokuComponent } from './sudoku.component';


export const SUDOKU_COMPONENT = [
    SudokuComponent
];

export const SUDOKU_ROUTING: Routes = [
    { path: 'sudoku', component: SudokuComponent }
];