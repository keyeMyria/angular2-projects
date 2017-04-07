import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

@Component({
    selector : 'subscription-management',
    template : `
        <h2>Async Pipe and share()</h2>
        <div *ngIf="user | async; let users; else loading">
            {{users | json}}
           <div *ngFor="let user of users">
                <h2>{{user.firstName}} {{user.lastName}}</h2>
                <dl>
                    <dt>Age:</dt>
                    <dd>{{user.age}}</dd>
           
                    <dt>Height:</dt>
                    <dd>{{user.height}}</dd>
                    
                    <dt>Mass:</dt>
                    <dd>{{user.mass}}</dd>
                    
                    <dt>Homeworld:</dt>
                    <dd>{{user.homeworld}}</dd>
                </dl>
            </div>
        </div>
        <ng-template #loading>Loading User Data...</ng-template>
    `,
    providers: []
})
export class SubscriptionManagementComponent implements OnInit {

    user: Observable<{}>;

    constructor() {
    }

    ngOnInit() {
        // this.user = this.getAsyncDataUser().share();
        this.user = Observable.forkJoin(this.getAsyncDataUser(), this.getAsyncDataUser2()).share();
    }

    ngOnChanges() {
        console.log(this);
    }

    getAsyncDataUser(): Observable<any> {
        return Observable.of({
            firstName: 'Luke',
            lastName : 'Skywalker',
            age      : 65,
            height   : 178,
            mass     : 77,
            homeworld: 'Tatooine'
        }).delay(2000);
    }

    getAsyncDataUser2(): Observable<any> {
        return Observable.of({
            firstName: 'Luke2',
            lastName : 'Skywalker2',
            age      : 65,
            height   : 178,
            mass     : 77,
            homeworld: 'Tatooine2'
        }).delay(3000);
    }

}