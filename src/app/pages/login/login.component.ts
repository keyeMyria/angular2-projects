import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
import { ILoginForm, IToken } from './../../interfaces';


@Component({
    selector: 'login',
    template: require('./login.html')
})
export class LoginComponent implements OnInit {

    public form: FormGroup;
    public username: AbstractControl;
    public password: AbstractControl;

    constructor(private _login: LoginService,
                private _fb: FormBuilder,
                private _router: Router) {

    }

    public ngOnInit() {
        this.formBuild();
    }

    public onSubmit(value: ILoginForm) {

        if (!this.form.valid) return;

        this._login.login(value)
            .subscribe(
                (res: IToken) => {
                    localStorage.setItem('profile', JSON.stringify(res));
                    this._router.navigate(['/'])
                },
                (error: any) => {
                    console.log(error, 'error');
                });
    }

    private formBuild() {
        this.form = this._fb.group({
            'username': ['', Validators.required],
            'password': ['', Validators.required]
        });

        this.username = this.form.controls['username'];
        this.password = this.form.controls['password'];

        //this.form.valueChanges.subscribe((data: ISignInForm) => this.onValueChanged(data))
    }

    private onValueChanged(data: ILoginForm) {
        console.log(data);
    }
}