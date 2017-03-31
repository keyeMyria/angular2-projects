import { NgModule } from '@angular/core';
import { SpyDirective } from './spy/spy.directive';

const DIRECTIVES = [
    SpyDirective
];

@NgModule({
    imports: [],
    exports: [...DIRECTIVES],
    declarations: [...DIRECTIVES],
    providers: [],
})
export class SeDirectiveModule { }
