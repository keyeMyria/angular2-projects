import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Question } from '../../models/question.model';

@Component({
    selector : 'questions-form',
    styles   : [require('./questions-form.scss')],
    template : require('./questions-form.html'),
    providers: []
})
export class QuestionsFormComponent implements OnInit {

    @Input('questions') questions: Question[];

    form: FormGroup;

    constructor() { }

    ngOnInit() {
        this.form = this.generateForm(this.questions);
    }

    private generateForm(questions: Question[]):FormGroup {
        const formControls = questions.reduce(this.generateControl, {});

        return new FormGroup(formControls);
    }

    private generateControl(controls: any, question: Question) {
        if(question.required) {
            controls[question.id] = new FormControl(question.value || '', Validators.required);
        } else {
            controls[question.id] = new FormControl(question.value || '');
        }

        return controls
    }
}