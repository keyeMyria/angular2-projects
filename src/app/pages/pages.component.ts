import { Component, OnInit, AfterViewInit } from '@angular/core';

import { SeAsideService } from '../components/se-aside/se-aside.service';
import { PAGES_MENU } from './pages.menu';
import { Observable } from 'rxjs';

@Component({
    selector: 'pages',
    styles  : [require('./pages.scss')],
    template: `
        <!--<se-header></se-header>-->
        <div class="wrapper-content">
            <se-aside></se-aside>
            <section class="content-section animated fadeIn">
                <router-outlet></router-outlet>
            </section>
        </div>
        <se-loader></se-loader>
    `
})
export class PagesComponent implements OnInit, AfterViewInit {

    constructor(private _asideService: SeAsideService) {
    }

    ngOnInit() {
        getData()
            .filter((beer) => beer.price >= 8)
            .subscribe(
                (beer) => {},
                (error) => console.error(error),
                () => console.log('The stream is over')
            );
    }

    ngAfterViewInit() {
        this._asideService.updateMenuBar(PAGES_MENU);
    }
}

function getData() {
    const beers = [
        { name: 'Stella', country: 'Belgium', price: 9.50 },
        { name: 'Sam Adams', country: 'USA', price: 8.50 },
        { name: 'Bud Light', country: 'USA', price: 6.50 },
        { name: 'Brooklyn Lager', country: 'USA', price: 8.00 },
        { name: 'Sapporo', country: 'Japan', price: 7.50 }
    ];

    return Observable.create((observer) => {
        beers.forEach((beer) => observer.next(beer));
        observer.complete();
    });
}