import { Component, OnInit } from '@angular/core';
import { SeLangsService } from './se-langs.service';

@Component({
    selector : 'se-langs',
    styles   : [require('./se-langs.scss')],
    template : `
        <select *ngIf="langs" (change)="changeLang($event)" [(ngModel)]="selectedLang">
            <option *ngFor="let item of langs" [value]="item">{{item}}</option>
        </select>
    `,
    providers: []
})
export class SeLangsComponent implements OnInit {

    langs: string[];
    selectedLang: string;

    constructor(private _seLangs: SeLangsService) {
    }

    ngOnInit() {
        this.selectedLang = this._seLangs.getLang();
        this.langs = this._seLangs.getLangs();
    }

    changeLang(event: Event) {
        this._seLangs.useLang(event.target['value']);
    }

}