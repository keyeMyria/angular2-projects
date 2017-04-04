import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { GLOBAL_SERVICES } from './services';

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, 'public/json/i18n/', '.json');
}

@NgModule({
    imports     : [
        BrowserModule,
        HttpModule,
        routing,
        PagesModule,
        TranslateModule.forRoot({
            loader: {
                provide   : TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps      : [Http]
            }
        })
    ],
    declarations: [AppComponent],
    exports     : [TranslateModule],
    providers   : [...GLOBAL_SERVICES],
    bootstrap   : [AppComponent]
})
export class AppModule {
}