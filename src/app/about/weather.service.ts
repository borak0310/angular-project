import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {

    constructor(private http: HttpClient) {

    }

    getWeather() {
        return this.http.get('https://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=1f1aaba5-616a-4a33-867d-878142cac5c4');
    }
}
