import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { AppComponent } from './app.component';
import { AppConfigService } from './app.config.service';

describe('AppComponent (inline template)', () => {
    let comp: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    let title: DebugElement;
    let titleEl;

    let appService;
    let spy;
    let testQuote: string;

    let quoteEl;

    beforeEach(() => {

        testQuote = 'Something good!';

        TestBed.configureTestingModule({
            declarations: [AppComponent],
            providers: [
                AppConfigService
            ]
        });

        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.componentInstance;

        appService = fixture.debugElement.injector.get(AppConfigService);
        spy = spyOn(appService, 'getQuote')
            .and.returnValue(Promise.resolve(testQuote));

        title = fixture.debugElement.query(By.css('.app'));
        titleEl = title.nativeElement;

        quoteEl = fixture.debugElement.query(By.css('.twain')).nativeElement;
    });

    it('should display original title', () => {
        fixture.detectChanges();
        expect(titleEl.textContent).toBe(comp.title);
    });

    it('should not show quote before OnInit', () => {
        expect(quoteEl.textContent).toBe('', 'nothing displayed');
        expect(spy.calls.any()).toBe(false, 'getQuote not yet called');
    });

    it('should still not show quote after component initialized', () => {
        fixture.detectChanges();

        expect(quoteEl.textContent).toBe('...', 'no quote yet');
        expect(spy.calls.any()).toBe(true, 'getQuote called');
    });

    it('should show quote after getQuote promise (async)', async(() => {
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(quoteEl.textContent).toBe(testQuote);
        });
    }));

    it('should show quote after getQuote promise (faceAsync)', fakeAsync(() => {
        fixture.detectChanges();
        tick();
        fixture.detectChanges();
        expect(quoteEl.textContent).toBe(testQuote);
    }));

});