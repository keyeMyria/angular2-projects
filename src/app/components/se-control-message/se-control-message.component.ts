import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from './validation.service';

@Component({
    selector : 'se-control-message',
    template : `
        <div *ngIf="errorMessage !== null">{{errorMessage}}</div>
    `
})
export class SeControlMessageComponent implements OnInit {

    @Input() control: FormControl;

    get errorMessage() {
        for (let key in this.control.errors) {
            if (this.control.errors.hasOwnProperty(key) && this.control.touched) {
                return ValidationService.getValidatorErrorMessage({
                    validatorName: key,
                    validatorValue: this.control.errors[key]
                });
            }
        }

        return null;
    }

    constructor() { }

    ngOnInit() {  }
}