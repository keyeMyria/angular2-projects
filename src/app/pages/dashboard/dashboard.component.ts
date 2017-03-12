import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dashboard',
    styles  : [require('./dashboard.scss')],
    template: require('./dashboard.html')
})
export class DashboardComponent implements OnInit {
    
    constructor() {
    }

    ngOnInit() {
    }
}