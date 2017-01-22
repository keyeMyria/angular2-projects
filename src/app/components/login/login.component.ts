import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

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

    constructor() {
    }

    ngOnInit() {
        this.loginForm = new FormGroup({
            email   : new FormControl('', [Validators.required, Validators.minLength(6)]),
            password: new FormControl('', [Validators.required])
        });
    }

    onSubmit({ value, valid }: { value: IUserLogin, valid: boolean }) {
        console.log(value);
        console.log(valid);
    }

}