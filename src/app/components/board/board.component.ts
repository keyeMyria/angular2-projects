import { Component, Input, OnInit } from '@angular/core';
import { IPuzzle } from '../../models/IPuzzle';
import { Tile } from '../../models/Tile';

@Component({
    selector: 'board',
    template: require('./board.html')
})
export class BoardComponent implements OnInit {

    @Input() state: IPuzzle;

    ngOnInit() {

    }

    getStyles(tile: Tile) {
        return {
            top: tile.location.top + 'px',
            left: tile.location.left + 'px',
            width: this.state.tileSize + 'px',
            height: this.state.tileSize + 'px',
            backgroundImage: `url(${this.state.image})`,
            backgroundPosition: `${-tile.location.left}px ${-tile.location.top}px`
        }
    }
}