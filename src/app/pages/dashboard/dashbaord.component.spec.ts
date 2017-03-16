import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DashboardComponent } from './dashboard.component';
import { SeHeaderService } from '../../components/se-header/se-header.service';
import { MaterialModule } from '@angular/material';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

describe('DashboardComponent', () => {

    let comp: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;

    // beforeEach(() => {
    //     TestBed.configureTestingModule({
    //         imports     : [MaterialModule, RouterModule, CommonModule],
    //         declarations: [DashboardComponent],
    //     });
    //
    //     fixture = TestBed.createComponent(DashboardComponent);
    //     comp = fixture.componentInstance;
    // });
    //
    // it('Should have a title', () => {
    //     let el: HTMLElement = fixture.debugElement.query(By.css('h1')).nativeElement;
    //     expect(el.textContent).toContain('Dashboard');
    // });
});