import { Component } from '@angular/core';


@Component({
    selector: 'app-accumulate',
    template: `
    <h1>{{title}}</h1>
    <h3>La base es: <strong>{{ base }}</strong></h3>

    <button (click)="accumulate(base)">+ {{ base }}</button>

    <span>{{number}}</span>

    <button (click)="accumulate(-base)">- {{ base }}</button>
    `
})

export class AccumulateComponent {

    title : string  = 'Contador App';
    number: number = 10;
    base: number = 5;

    accumulate(value: number) {
        this.number += value;
    }

}