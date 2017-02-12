import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pages',
    template: `
    <div class="body-wrapper" [ngClass]="{'sidebar-open': isShowSidebar}">
        <se-sidebar></se-sidebar>
        
        <main class="main">
            <se-header (toggleSidebar)="toggleSidebar($event)"></se-header>
            
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