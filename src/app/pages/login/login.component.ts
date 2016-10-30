import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login',
    template: require('./login.html')
})
export class LoginComponent implements OnInit {

    constructor() {
        console.log(this);
    }

    ngOnInit() {
    }

}