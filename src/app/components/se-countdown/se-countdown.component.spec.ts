import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeCountdownComponent } from './se-countdown.component';
import { SeCountdownService } from './se-countdown.service';

describe('SeCountdownComponent', () => {

    let comp: SeCountdownComponent;
    let fixture: ComponentFixture<SeCountdownComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SeCountdownComponent],
            providers   : [SeCountdownService]
        });

        fixture = TestBed.createComponent(SeCountdownComponent);
        comp = fixture.componentInstance;
    });
    
    it('Should be hide countdown component if we don`t pass any options in a template', () => {
        fixture.detectChanges();
        expect(comp.options).toEqual({});
    });

    it('Should show the timer if we pass any options in a template', () => {
        comp.options.time = '10:10';
        fixture.detectChanges();
        expect(comp.options).toEqual({ isStart: true, time: '10:10' });
    });
});