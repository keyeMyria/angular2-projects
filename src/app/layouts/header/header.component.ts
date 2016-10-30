import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'se-header',
    template: require('./header.html')
})
export class HeaderComponent implements OnInit {

    @Output('toggleSidebar') toggleSidebar = new EventEmitter();

    public isShowSidebar: boolean = true;

    constructor() {

    }

    ngOnInit() {
    }

    sidebarToggle() {
        this.isShowSidebar = !this.isShowSidebar;
        this.toggleSidebar.emit(this.isShowSidebar);
    }

}