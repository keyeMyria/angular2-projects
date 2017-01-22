import { Component } from '@angular/core';

import '../public/scss/styles.scss';

@Component({
    selector: 'app',
    template: `
    <div class="main-content_wrapper">
        <router-outlet></router-outlet>
    </div>
    `
})
export class AppComponent {

}