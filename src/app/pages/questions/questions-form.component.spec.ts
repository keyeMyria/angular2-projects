import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { QuestionsFormComponent } from './questions-form.component';

describe('Component: QuestionsFormComponent', () => {
    let comp: QuestionsFormComponent;
    let fixture: ComponentFixture<QuestionsFormComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports     : [ReactiveFormsModule],
            declarations: [QuestionsFormComponent]
        });

        fixture = TestBed.createComponent(QuestionsFormComponent);
        comp = fixture.componentInstance;
    });

    it('should create a `QuestionsFormComponent`', () => {
        expect(comp).toBeDefined();
    });

    it('should create a `FormGroup` comprised of `FormControl`s', () => {
        fixture.detectChanges();
        expect(comp.form instanceof FormGroup).toBe(true);
    });

    it('should create a `FormControl` for each question', () => {
        comp.questions = [
            {
                controlType: 'text',
                id         : 'first',
                label      : 'My First',
                required   : false
            },
            {
                controlType: 'text',
                id         : 'second',
                label      : 'Second!',
                required   : false
            }
        ];

        expect(Object.keys(comp.form.controls)).toEqual(['first', 'second']);
    });
});