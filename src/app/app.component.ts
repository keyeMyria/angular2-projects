import '../public/scss/styles.scss';

import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
    <h1>{{title}}</h1>
    <article-component></article-component>
    `
})

export class AppComponent {
    title = 'Test title';
}