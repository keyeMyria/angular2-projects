import { Component, Input, OnInit } from '@angular/core';
import { IPuzzle } from '../../models/IPuzzle';
import { PuzzleTile } from "../../models/PuzzleTile";

@Component({
    selector: 'board',
    template: require('./board.html')
})
export class BoardComponent implements OnInit {

    @Input() state: IPuzzle;

    ngOnInit() {
        console.log(this.state);
    }

    getStyles(tile: PuzzleTile) {

        return {
            top: tile.current.location.top + 'px',
            left: tile.current.location.left + 'px',
            width: this.state.tileSize + 'px',
            height: this.state.tileSize + 'px',
            backgroundImage: `url(${this.state.image})`,
            backgroundPosition: `${-tile.goal.location.left}px ${-tile.goal.location.top}px`
        }
    }
}