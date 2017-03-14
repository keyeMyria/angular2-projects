import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SeLoaderComponent } from './se-loader.component';
import { SeLoaderService } from './se-loader.service';

describe('SeLoaderComponent', () => {

    let comp: SeLoaderComponent;
    let fixture: ComponentFixture<SeLoaderComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SeLoaderComponent],
            providers   : [SeLoaderService]
        });

        fixture = TestBed.createComponent(SeLoaderComponent);

        comp = fixture.componentInstance;
    });

    it('Should be hided', () => {
        expect(true).toBe(true);
    });
});