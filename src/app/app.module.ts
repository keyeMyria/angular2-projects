import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app-routing.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
    imports     : [
        BrowserModule,
        HttpModule,
        routing,
        PagesModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap   : [AppComponent]
})
export class AppModule {
}