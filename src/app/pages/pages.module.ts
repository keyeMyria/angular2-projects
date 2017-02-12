import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from 'ng2-translate';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend, RequestOptions } from '@angular/http';

import { PagesRoutingModule } from './pages-routing.module';

import { LayoutsModule } from '../layouts/layouts.module';

import { HttpService } from '../services';

import { PagesComponent } from './pages.component';
import { LoginComponent, LoginGuard, AuthGuard, LoginService } from './login';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { requestOptionsProvider } from '../services/DefualtRequestOptions';

const GUARD_SERVICES = [
    AuthGuard,
    LoginGuard
];

const SERVICES = [
    LoginService,
    {
        provide: HttpService,
        useFactory: (backend: XHRBackend, defaultOptions: RequestOptions) => {
            return new HttpService(backend, defaultOptions);
        },
        deps: [XHRBackend, RequestOptions],
    },
    requestOptionsProvider
];

const PAGE_COMPONENTS =[
    PagesComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent
];

@NgModule({
    imports     : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        TranslateModule,
        PagesRoutingModule,

        LayoutsModule,
    ],
    declarations: [
        ...PAGE_COMPONENTS
    ],
    providers   : [
        ...SERVICES,
        ...GUARD_SERVICES,
    ],
    exports     : [
        TranslateModule,
    ]
})

export class PagesModule {

}