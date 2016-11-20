import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { GameComponent } from './game/game.component';
import { BoardComponent } from './board/board.component';

const COMPONENTS = [
    GalleryComponent,
    GameComponent,
    BoardComponent
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ...COMPONENTS
    ],
    exports: [
        ...COMPONENTS
    ]
})

export class ComponentsModule {

}