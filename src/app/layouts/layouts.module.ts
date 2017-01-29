import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        ...COMPONENTS
    ],
    providers: [

    ],
    exports: [
        ...COMPONENTS
    ]
})

export class LayoutsModule {

}