import { Injectable } from '@angular/core';
import { ISummary } from './models/summary';
import {Http, HttpModule} from '@angular/http';
import * as moment from 'moment';
import { ITemperature } from './models/temperature';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
summary : ISummary;
temperature :ITemperature;

  constructor(private httpService:Http) { }



fetchWeatherInfo(cityName:string)
{
  const url=`https://api.openweathermap.org/data/2.5/forecast?q=Hyderabad&APPID=d76ce6e4f25efbe1968fa2f568de2277`;
  
    this.httpService.get(url)
    .subscribe((rsp)=>{
      const data= rsp.json();
      console.log(data);
    
    this.summary={
      cityName : cityName,
      day: moment(data.list[0].dt*1000).format('dddd'),
      weatherCondition : data.list[0].weather[0].description
    
   };
  });
  this.fetchCurrentTemperature(cityName);
}
fetchCurrentTemperature(cityName:string)
{

  const url=`https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&APPID=d76ce6e4f25efbe1968fa2f568de2277`;
  this.httpService.get(url)
  .subscribe((rsp)=>{
    const data = rsp.json();
   console.log(data);
   this.temperature={
     currentWeatherImageURL : data.weather.icon+".png",
     temperatureInCelsius :Math.round(data.main.temp-270),
     temperatureInFarenheit :0,
     temperatureInKelvin :0
   }
   console.log(this.temperature.currentWeatherImageURL);
   });
  }
 
}