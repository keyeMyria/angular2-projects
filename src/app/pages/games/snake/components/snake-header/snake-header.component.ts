import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'snake-header',
    styles  : [require('./snake-header.scss')],
    template: require('./snake-header.html')
})
export class SnakeHeaderComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}