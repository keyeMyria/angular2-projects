import { Component, Input, OnInit } from '@angular/core';
import { IPuzzle } from '../../models/IPuzzle';

@Component({
    selector: 'board',
    template: require('./board.html')
})
export class BoardComponent implements OnInit {

    @Input() state: IPuzzle;

    ngOnInit() {
        console.log('board init', this.state);
    }

    getStyles() {

    }
}