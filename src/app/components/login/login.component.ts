import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { validationMassages } from './../../helpers';
import { GlobalValidator } from '../../helpers/global-validator';

interface IUserLogin {
    email: string;
    password: string;
}

@Component({
    selector: 'login',
    template: require('./login.html')
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    formErrors: IUserLogin = { email: '', password: '' };

    constructor(private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.buildForm();
    }

    buildForm(): void {
        this.loginForm = this.fb.group({
            'email'   : ['', [Validators.required, GlobalValidator.emailFormat]],
            'password': ['', [Validators.required, Validators.minLength(6)]]
        });

        this.onValueChanged();
    }

    onValueChanged() {
        if (!this.loginForm) { return; }
        const form = this.loginForm;

        for (const field in this.formErrors) {
            this.formErrors[field] = '';
            const control = form.get(field);

            if(control && control.dirty && !control.valid) {
                const errorMessages = validationMassages(Object.assign({}, control.errors, { name: field }));

                for (const key in control.errors) {
                    this.formErrors[field] = errorMessages[key];
                }
            }
        }
    }

    onSubmit({ value, valid }: { value: IUserLogin, valid: boolean }): void {
        console.log(value);
        console.log(valid);
    }

}