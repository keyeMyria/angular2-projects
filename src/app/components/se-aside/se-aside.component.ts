import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { SeAsideService } from './se-aside.service';

@Component({
    selector: 'se-aside',
    styles  : [require('./se-aside.css')],
    template: require('./se-aside.html')
})
export class SeAsideComponent implements OnInit, OnDestroy {

    public menuItems: any[];
    protected _menuItemSub: Subscription;

    constructor(private _asideService: SeAsideService) {
    }

    ngOnInit(): void {
        this._menuItemSub = this._asideService.updateMenuBar$.subscribe(this.updateMenu.bind(this));
    }

    ngOnDestroy(): void {
        this._menuItemSub.unsubscribe();
    }

    updateMenu(menuItems): void {
        this.menuItems = menuItems;
    }
}