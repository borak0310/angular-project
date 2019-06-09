import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service'

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    weathers : Object;

    constructor(private data: WeatherService) { }

    ngOnInit() {
        this.data.getWeather().subscribe(data => {
            this.weathers = data
            console.log(this.weathers);
        }
        );
    }

}
