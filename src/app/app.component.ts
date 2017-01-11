import { Component } from '@angular/core';

import '../public/scss/styles.scss';

@Component({
    selector: 'app',
    template: `
    <h1>{{title}}</h1>
    `
})

export class AppComponent {
    title = 'Test title'
}