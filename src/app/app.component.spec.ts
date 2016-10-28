import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import generateTSConfig = ts.generateTSConfig;

describe('App', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [AppComponent]});
    });

    it('should work', () => {
        let fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
    });
});