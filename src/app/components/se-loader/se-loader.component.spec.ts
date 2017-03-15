import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { SeLoaderComponent } from './se-loader.component';
import { SeLoaderService } from './se-loader.service';

describe('SeLoaderComponent', () => {

    let comp: SeLoaderComponent;
    let fixture: ComponentFixture<SeLoaderComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    // async beforeEach need if we have templateUrl and styleUrl
    // beforeEach(async(() => {
    //     TestBed.configureTestingModule({
    //         declarations: [SeLoaderComponent],
    //         providers   : [SeLoaderService]
    //     })
    //         .compileComponents()
    // }));

    // synchronous beforeEach
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SeLoaderComponent],
            providers   : [SeLoaderService]
        });

        fixture = TestBed.createComponent(SeLoaderComponent);
        comp = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should be initialized with hide loader', () => {
        expect(comp.isShow).toBeFalsy();
    });
});