import { Component, OnInit, Input } from '@angular/core';
import { PageMenuItem } from '../../../pages/pages.menu';

@Component({
    selector: 'se-aside-item',
    styles  : [require('./se-aside-item.css')],
    template: require('./se-aside-item.html')
})
export class SeAsideItemComponent implements OnInit {

    @Input('menuItem') menuItem: PageMenuItem;

    constructor() {
    }

    ngOnInit() {  }

}