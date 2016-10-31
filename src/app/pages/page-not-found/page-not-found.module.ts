import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found.component';
import { PageNotFoundRouting } from './page-not-found.routing';

@NgModule({
    imports: [
        CommonModule,
        PageNotFoundRouting
    ],
    declarations: [
        PageNotFoundComponent
    ],
    exports: [

    ]
})

export class PageNotFoundModule {
    
}