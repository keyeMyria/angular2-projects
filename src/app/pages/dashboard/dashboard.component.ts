import { Component, OnInit, OnDestroy } from '@angular/core';
import { SeHeaderService } from '../../components/se-header/se-header.service';
import { ApplicationUtils } from '../app-list';

@Component({
    selector: 'dashboard',
    styles  : [require('./dashboard.scss'), require('./card.scss')],
    template: require('./dashboard.html')
})
export class DashboardComponent implements OnInit, OnDestroy {

    apps: any[];
    searchSub: any;

    constructor(private _seHeader: SeHeaderService) {
        this.searchSub = this._seHeader.search$.subscribe(this.search.bind(this));
    }

    ngOnInit() {
        this.apps = ApplicationUtils.getApplications();
    }

    ngOnDestroy() {
        this.searchSub.unsubscribe();
    }

    search(value: string) {
        this.apps = ApplicationUtils.searchByName(value);
    }
}