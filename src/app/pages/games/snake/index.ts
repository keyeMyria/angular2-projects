import { Routes } from '@angular/router';
import { SnakeComponent } from './snake.component';
import { SnakeHeaderComponent } from './components/snake-header/snake-header.component';

export const SNAKE_COMPONENT = [
    SnakeComponent,
    SnakeHeaderComponent
];

export const SNAKE_ROUTING: Routes = [
    { path: 'snake', component: SnakeComponent }
];