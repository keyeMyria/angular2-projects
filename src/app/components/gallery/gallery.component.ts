import { Component } from '@angular/core';
import { PuzzleService } from '../../services/puzzle.service';

@Component({
    selector: 'gallery',
    template: require('./gallery.html')
})
export class GalleryComponent {

    constructor(private puzzle: PuzzleService) {

    }

}