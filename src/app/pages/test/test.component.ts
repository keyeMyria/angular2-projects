import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector : 'test-cm',
    template : `
        <form [formGroup]="form">
            <div>
                <input type="text" formControlName="name">
                <se-control-message [control]="form.controls.name"></se-control-message>
            </div>
        </form>
    `,
})
export class TestCmComponent implements OnInit {

    form: FormGroup;

    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
        this.form = this.formBuilder();
    }

    formBuilder() {
        return this._fb.group({
            name: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]]
        });
    }
}