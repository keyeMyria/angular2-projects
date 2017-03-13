import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SeHeaderService {

    searchSource = new Subject();
    setValueSource = new Subject();

    search$ = this.searchSource.asObservable();
    setValue$ = this.setValueSource.asObservable();

    constructor() { }

    search(term: string): void {
        this.searchSource.next(term);
    }

    setValue(value: string) {
        this.setValueSource.next(value);
    }
}