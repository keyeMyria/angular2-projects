import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../../pages/login/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'se-header',
    template: require('./header.html')
})
export class HeaderComponent implements OnInit {

    @Output('toggleSidebar') toggleSidebar = new EventEmitter();

    public isShowSidebar: boolean = true;

    constructor(private _login: LoginService, private _router: Router) {

    }

    ngOnInit() {
    }

    sidebarToggle() {
        this.isShowSidebar = !this.isShowSidebar;
        this.toggleSidebar.emit(this.isShowSidebar);
    }

    logout() {
        this._login.logout();
        this._router.navigate(['/login']);
    }
}