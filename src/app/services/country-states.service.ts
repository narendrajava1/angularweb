import { Injectable } from '@angular/core';
import { Country } from '../model/country';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Observable, pipe } from 'rxjs';
import { Region } from '../model/region';
import { environment as dev } from 'src/environments/environment.dev';
import { Weather } from '../model/weather';
import { Place } from '../model/place';
import { WeatherTempPressure } from '../model/weather-temp-pressure';
import { Situation } from '../model/situation';

@Injectable({
  providedIn: 'root'
})
export class CountryStatesService {
  private PLACE_APPID: string = "/all/?key=f365ef83970fa74164ba4395c5d67a9b";
  private _apiCountryUrl: string = '/api/country';
  private _apiRegionsUrl: string = '/api/region';
  private _apiCountry_State_WeatherUrl: string = '/data/2.5/weather';
  private WEATHER_APPID="&APPID=32745a34186bc20b81f8cd7737db09bf"

  private country: Country[] = new Array<Country>();
  constructor(private _http: HttpClient) { }
  getCountries(): Observable<Country[]> {
    
    return this._http.get(`${this._apiCountryUrl}${this.PLACE_APPID}`).pipe(map((result: Country[]) => {
      // console.log(result)
      return result;

    }))
    
  }

  getRegions(region:string): Observable<Region[]> {
    return this._http.get(`${this._apiRegionsUrl}/${region}${this.PLACE_APPID}`).pipe(map((result: Region[]) => {
      // console.log(result)
      return result
    }));
  }

  searchWeatherData(cityName: string,countryId:string):Observable<Weather> {
   return this._http.get(`${this._apiCountry_State_WeatherUrl}?q=${cityName},${countryId}${this.WEATHER_APPID}&exclude=current&units=metric`).pipe(map((result) => {
      console.log(result)
    var weatherRes=new Weather();
    var place=new Place();
    var weatherTempPressure=new WeatherTempPressure();
    var situation=new Situation();
    var SituationArray:Situation[]=[];
     weatherRes.coord= result['coord'];
     place.country=result['sys'].country;
     place.cityName=result['name'];
     place.sunrise=result['sys'].sunrise;
     place.sunset=result['sys'].sunset;
     place.timezone=result['timezone'];
     weatherTempPressure.feels_like=result['main'].feels_like;
     weatherTempPressure.humidity=result['main'].humidity;
     weatherTempPressure.pressure=result['main'].pressure;
     weatherTempPressure.temp=result['main'].temp;
     weatherTempPressure.temp_max=result['main'].temp_max;
     weatherTempPressure.temp_min=result['main'].temp_min;
     weatherTempPressure.sea_level=result['main'].sea_level;
     weatherTempPressure.windSpeed=result['wind'].speed;
     situation.description=result['weather'][0].description;
     situation.main=result['weather'][0].main;  

     weatherRes.place=place;
     weatherRes.tempPressure=weatherTempPressure;
     weatherRes.weather=[situation];
     console.log(weatherRes)
      return weatherRes;
    }));
  }

  }


