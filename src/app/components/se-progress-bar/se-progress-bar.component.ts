import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { SeProgressBarService, ProgressBar } from './se-progress-bar.service';

@Component({
    selector : 'se-progress-bar',
    styles   : [require('./se-progress-bar.scss')],
    template : `
        <div class="se-progress-bar" *ngIf="isShow">
            <div #seProgressBar class="se-progress-line"></div>
        </div>
    `,
    providers: []
})
export class SeProgressBarComponent implements OnInit, OnDestroy {

    isShow: boolean = false;
    showSub$: Subscription;
    hideSub$: Subscription;

    timer: any;

    @ViewChild('seProgressBar') seProgressBar: ElementRef;

    constructor(private _progressBar: SeProgressBarService, private renderer: Renderer2) {
        this.showSub$ = _progressBar.show$.subscribe((res) => {
            this.show(res);
        });
        this.hideSub$ = _progressBar.hide$.subscribe(() => {
            this.hide();
        });
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.showSub$.unsubscribe();
        this.hideSub$.unsubscribe();
    }

    show(params: ProgressBar) {
        this.isShow = true;
        this.countDown(params);
    }

    hide() {
        this.isShow = false;

        if (this.timer) {
            this.clearTimer();
        }
    }

    countDown(params: ProgressBar = { timeInSecond: 10 }) {
        let width = 100;
        let pass = +(width / params.timeInSecond).toFixed();
        if (this.timer) {
            this.clearTimer();
        }
        this.timer = setInterval(() => {
            width -= pass;
            if (width <= 0) {
                this.clearTimer();
            }
            if (width < pass) {
                width = 0;
            }

            this.setStyle(width);
        }, 1000);
    }

    clearTimer() {
        clearTimeout(this.timer);
        this.timer = null;
    }

    setStyle(w: number) {
        this.renderer.setStyle(this.seProgressBar.nativeElement, 'width', w + '%');
    }
}