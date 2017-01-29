import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from 'ng2-translate';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend, RequestOptions, Http } from '@angular/http';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeModule } from './home/home.module';
import { LayoutsModule } from '../layouts/layouts.module';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { AuthGuard } from './login/auth-guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpService } from '../services/HttpService';

@NgModule({
    imports     : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        TranslateModule,
        PagesRoutingModule,

        LayoutsModule,
        HomeModule,
    ],
    declarations: [
        PagesComponent,
        LoginComponent,
        PageNotFoundComponent
    ],
    providers   : [
        LoginService,
        AuthGuard,
        {
            provide: HttpService,
            useFactory: (backend: XHRBackend, defaultOptions: RequestOptions) => {
                return new HttpService(backend, defaultOptions);
            },
            deps: [XHRBackend, RequestOptions],
        }
    ],
    exports     : [
        TranslateModule,
    ]
})

export class PagesModule {

}