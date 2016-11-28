import { 
    Component,
    Input, 
    OnInit,
    Output,
    ViewChild,
    ElementRef,
    EventEmitter,
    Renderer 
} from '@angular/core';

import { PuzzleTile } from "../../models/PuzzleTile";
import { PuzzleGame } from '../../models/PuzzleGame';

@Component({
    selector: 'board',
    template: require('./board.html')
})
export class BoardComponent implements OnInit {

    @Input() state: PuzzleGame;

    @Output() move = new EventEmitter();

    @ViewChild('board') board: ElementRef;
    @ViewChild('background') background: ElementRef;

    hidePuzzleIndex: boolean = true;

    constructor(private renderer: Renderer) {

    }

    ngOnInit() {
        let boardSize = this.state.puzzleSize * 3;
        let bgSize = boardSize + 'px ' + boardSize + 'px';

        this.renderer.setElementStyle(this.board.nativeElement, 'width', boardSize + 'px');
        this.renderer.setElementStyle(this.board.nativeElement, 'height', boardSize + 'px');
        this.renderer.setElementStyle(this.background.nativeElement, 'background-size', bgSize);
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

    moveTile(tile: PuzzleTile) {
        this.move.emit(tile);
    }
}