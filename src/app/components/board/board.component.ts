import { Component, Input, OnInit } from '@angular/core';
import { PuzzleTile } from "../../models/PuzzleTile";
import { PuzzleGame } from '../../models/PuzzleGame';

@Component({
    selector: 'board',
    template: require('./board.html')
})
export class BoardComponent implements OnInit {

    @Input() state: PuzzleGame;

    ngOnInit() {
        console.log(this.state);
    }

    getStyles(tile: PuzzleTile) {
        return {
            top: tile.current.location.top + 'px',
            left: tile.current.location.left + 'px',
            width: this.state.puzzleSize + 'px',
            height: this.state.puzzleSize + 'px',
            backgroundImage: `url(${this.state.puzzleImage})`,
            backgroundPosition: `${-tile.goal.location.left}px ${-tile.goal.location.top}px`,
            display: tile.isBlank ? 'none' : ''
        }
    }
}