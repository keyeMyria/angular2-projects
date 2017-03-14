import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { SeLoaderComponent } from './se-loader.component';
import { SeLoaderService } from './se-loader.service';

describe('SeLoaderComponent', () => {

    let comp: SeLoaderComponent;
    let fixture: ComponentFixture<SeLoaderComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    // async beforeEach
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SeLoaderComponent],
            providers   : [SeLoaderService]
        })
            .compileComponents();
    }));

    // synchronous beforeEach
    beforeEach(() => {
        fixture = TestBed.createComponent(SeLoaderComponent);
        comp = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should be hided loader', () => {
        expect(comp.isShow).toBeFalsy();
    });
});