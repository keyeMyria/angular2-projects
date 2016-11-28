import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { ComponentsModule } from '../../components/components.module';

import { PuzzleService } from './../../services/puzzle.service';
import { PuzzleAction } from './../../actions/puzzle.action';

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule
    ],
    declarations: [
        HomeComponent
    ],
    providers: [
        PuzzleService,
        PuzzleAction
    ],
    exports: [

    ]
})

export class HomeModule {

}