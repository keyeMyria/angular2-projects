import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pages',
    template: `
    <div id="body-wrapper" class="navbar-fixed" [ngClass]="{'sidebar-open': isShowSidebar}">
        <se-header (toggleSidebar)="toggleSidebar($event)"></se-header>
        <se-sidebar></se-sidebar>
        
        <main class="main">
            <div class="container-fluid">
                <router-outlet></router-outlet>
            </div>
        </main>
        
    </div>
    `
})
export class PagesComponent implements OnInit {

    public isShowSidebar: boolean = true;

    constructor() { }

    ngOnInit() {

    }

    toggleSidebar(isShowSidebar: boolean) {
        this.isShowSidebar = isShowSidebar;
    }

}