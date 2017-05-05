import { Component, OnInit, OnDestroy } from '@angular/core';
import { SeHeaderService } from '../../components/se-header/se-header.service';
import { SeCountdownService } from '../../components/se-countdown/se-countdown.service';

@Component({
    selector: 'dashboard',
    styles  : [require('./dashboard.scss')],
    template: require('./dashboard.html')
})
export class DashboardComponent implements OnInit, OnDestroy {

    searchSub: any;

    constructor(private _seHeader: SeHeaderService, private _countdown: SeCountdownService) {
        this.searchSub = this._seHeader.search$.subscribe(this.search.bind(this));
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.searchSub.unsubscribe();
    }

    search(value: string) {
    }

    start() {
        this._countdown.start();
    }

    stop() {
        this._countdown.stop();
    }
}