import { Component, OnInit } from '@angular/core';
import { SIDEBAR_MENU } from './sidebar-menu';
import { Utils } from '../../utils/';

@Component({
    selector: 'se-sidebar',
    template: require('./sidebar.html')
})
export class SidebarComponent implements OnInit {

    menuItem;

    constructor() {
    }

    ngOnInit() {
        this.menuItem = Utils.clone(SIDEBAR_MENU);
    }
}