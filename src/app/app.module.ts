import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ArticleModule } from './article/article.module';


@NgModule({
    imports     : [
        BrowserModule,
        MaterialModule.forRoot(),

        ArticleModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap   : [ AppComponent ]
})
export class AppModule {

}