import { Component } from '@angular/core';
import {Http} from '@angular/http';
import {ISummary} from './models/summary';
import { WeatherService } from './weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  summary : ISummary;
  constructor(public weatherService:WeatherService)
  {

  }

  onButtonClick(cityName:string){
   console.log(cityName)
   this.weatherService.fetchWeatherInfo(cityName);
    /*const url = `https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&APPID=d76ce6e4f25efbe1968fa2f568de2277`;
     this.httpService.get(url)
      .subscribe((response ) => {
        const data = response.json();
      

      this.summary={
         cityName : cityName,
         day: data.list[0].dt,
         weatherCondition : data.list[0].weather[0].description

      };
    });
    */
  }
}
