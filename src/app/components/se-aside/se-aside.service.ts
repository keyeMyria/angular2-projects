import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { PageMenuItem } from '../../pages/pages.menu';

@Injectable()
export class SeAsideService {

    updateMenuBarSource = new Subject();
    updateMenuBar$ = this.updateMenuBarSource.asObservable();

    constructor() {}

    updateMenuBar(menuItems: PageMenuItem[]) {
        this.updateMenuBarSource.next(menuItems);
    }
}