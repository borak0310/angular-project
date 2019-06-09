import { Component, OnInit } from '@angular/core';

import { products } from './products';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    products = products;

    share() {
        window.alert('The product has been shared!');
    }

    constructor() { }

    ngOnInit() {
    }

}
