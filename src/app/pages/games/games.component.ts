import { Component } from '@angular/core';

@Component({
    selector: 'games',
    template: `
        <section class="animated fadeIn">
            <router-outlet></router-outlet>
        </section>
    `
})
export class GamesComponent {

}