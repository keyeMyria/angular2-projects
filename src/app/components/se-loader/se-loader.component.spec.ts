import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SeLoaderComponent } from './se-loader.component';

describe('SeLoaderComponent', () => {

    let comp: SeLoaderComponent;
    let fixture: ComponentFixture<SeLoaderComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SeLoaderComponent]
        });

        fixture = TestBed.createComponent(SeLoaderComponent);

        comp = fixture.componentInstance;

        de = fixture.debugElement.query(By.css(''));
        el = de.nativeElement;
    });
});