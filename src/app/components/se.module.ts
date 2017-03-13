import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { SeAsideComponent } from './se-aside/se-aside.component';
import { SeAsideService } from './se-aside/se-aside.service';
import { SeAsideItemComponent } from './se-aside/se-aside-item/se-aside-item.component';
import { SeHeaderComponent } from './se-header/se-header.component';
import { SeHeaderService } from './se-header/se-header.service';

const COMPONENTS = [
    SeAsideItemComponent,
    SeAsideComponent,
    SeHeaderComponent
];

const SERVICE = [
    SeAsideService,
    SeHeaderService
];

@NgModule({
    imports     : [
        CommonModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    exports     : [...COMPONENTS],
    declarations: [...COMPONENTS],
    providers   : [...SERVICE],
})
export class SeModule { }
