import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

const COMPONENTS = [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
];

@NgModule({
    imports: [
        CommonModule
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