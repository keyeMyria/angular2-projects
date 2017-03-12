import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeAsideComponent } from './se-aside/se-aside.component';
import { SeAsideService } from './se-aside/se-aside.service';
import { SeAsideItemComponent } from './se-aside/se-aside-item/se-aside-item.component';

const COMPONENTS = [
    SeAsideItemComponent,
    SeAsideComponent
];

const SERVICE = [
    SeAsideService
];

@NgModule({
    imports     : [CommonModule],
    exports     : [...COMPONENTS],
    declarations: [...COMPONENTS],
    providers   : [...SERVICE],
})
export class SeModule { }
