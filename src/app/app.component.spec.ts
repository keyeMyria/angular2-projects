import { ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { AppComponent } from './app.component';
import { AppConfigService } from './app.config.service';

describe('AppComponent (inline template)', () => {
    let comp: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let de: DebugElement;
    let el: HTMLElement;
    let appServiceStub;
    let appService;

    beforeEach(() => {
        // stub UserService for test purposes
        appServiceStub = {
            sum(a, b) {
                return a + b;
            }
        };

        TestBed.configureTestingModule({
            declarations: [AppComponent], // declare test component
            providers: [
                { provide: AppConfigService, useValue: appServiceStub }
            ]
        });

        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.componentInstance;

        // UserService actually injected into the component
        appService = fixture.debugElement.injector.get(AppConfigService);

        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    });

    it('should display original title', () => {
        fixture.detectChanges();
        expect(el.textContent).toEqual(comp.title);
    });

    it('should display a different test title', () => {
        comp.title = 'Test Title';
        fixture.detectChanges();
        expect(el.textContent).toContain('Test Title');
    });

    it('should be 6', () => {
        fixture.detectChanges();
        expect(comp.sum).toBe(5);
    });
});