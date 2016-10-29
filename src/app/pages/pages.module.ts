import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';

@NgModule({
    imports: [
        CommonModule,
        PagesRoutingModule,
        LoginModule,
        HomeModule
    ],
    declarations: [
        PagesComponent,
    ],
    exports: [

    ]
})

export class PagesModule {

}