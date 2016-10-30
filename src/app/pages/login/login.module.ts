import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from 'ng2-translate';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        LoginRoutingModule
    ],
    declarations: [
        LoginComponent
    ],
    exports: [

    ]
})

export class LoginModule {

}