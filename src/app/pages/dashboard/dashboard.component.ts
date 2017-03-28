import { Component, OnInit, OnDestroy } from '@angular/core';
import { SeHeaderService } from '../../components/se-header/se-header.service';

@Component({
    selector: 'dashboard',
    styles  : [require('./dashboard.scss')],
    template: require('./dashboard.html')
})
export class DashboardComponent implements OnInit, OnDestroy {

    searchSub: any;

    constructor(private _seHeader: SeHeaderService) {
        this.searchSub = this._seHeader.search$.subscribe(this.search.bind(this));
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.searchSub.unsubscribe();
    }

    search(value: string) {

    }
}