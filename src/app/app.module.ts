import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login';
import { PageNotFoundComponent } from './components/page-not-found';
import { AppRoutingModule } from './app-routing.module';

const APP_COMPONENTS: any[] = [
    LoginComponent,
    PageNotFoundComponent
];

@NgModule({
    imports     : [
        BrowserModule,
        ReactiveFormsModule,
        MaterialModule.forRoot(),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,

        ...APP_COMPONENTS
    ],
    bootstrap   : [ AppComponent ]
})

export class AppModule {

}