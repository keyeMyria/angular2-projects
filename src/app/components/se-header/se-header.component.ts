import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SeHeaderService } from './se-header.service';

@Component({
    selector: 'se-header',
    styles  : [require('./se-header.scss')],
    template: require('./se-header.html')
})
export class SeHeaderComponent implements OnInit, OnDestroy {

    form: FormGroup;
    setValueSub: any;

    constructor(private _fb: FormBuilder,
                private _header: SeHeaderService) {
        this.setValueSub = _header.setValue$.subscribe(this.setValue.bind(this));
    }

    ngOnInit() {
        this.formBuilder();
    }

    ngOnDestroy() {
        this.setValueSub.unsubscribe();
    }

    search(term: string) {
        this._header.search(term);
    }

    setValue(value: string = '') {
        this.form.patchValue({ search: value });
    }

    formBuilder() {
        this.form = this._fb.group({
            search: ['']
        });
    }
}