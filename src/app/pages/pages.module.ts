import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginModule } from './login/login.module';

@NgModule({
    imports: [
        CommonModule,
        PagesRoutingModule,
        LoginModule
    ],
    declarations: [
        PagesComponent,
        HomeComponent
    ],
    exports: [

    ]
})

export class PagesModule {

}