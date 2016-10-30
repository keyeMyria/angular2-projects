import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from 'ng2-translate';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { LayoutsModule } from '../layouts/layouts.module';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        PagesRoutingModule,
        LoginModule,
        HomeModule,
        LayoutsModule
    ],
    declarations: [
        PagesComponent,
    ],
    exports: [
        TranslateModule
    ]
})

export class PagesModule {

}