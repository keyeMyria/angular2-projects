import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sudoku',
    styles  : [require('./sodoku.scss')],
    template: require('./sudoku.html')
})
export class SudokuComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}