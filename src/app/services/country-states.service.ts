import { Injectable } from '@angular/core';
import { Country } from '../model/country';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Observable, pipe } from 'rxjs';
import { Region } from '../model/region';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class CountryStatesService {
  private APPID: string = "32745a34186bc20b81f8cd7737db09bf";
  private API_URL: string = "https://api.openweathermap.org/data/2.5/weather?q=";
  private _apiCountryUrl: string = '/api/country';
  private _apiCountryStateUrl: string = '/api/country/state';

  private country: Country[] = new Array<Country>();
  constructor(private _http: HttpClient) { }
  getCountries(): Observable<Country[]> {
    const headers = new HttpHeaders()
    .set("Access-Control-Allow-Origin","true");
    return this._http.get(environment.COUNTRY_API,{headers}).pipe(map((result: Country[]) => {
      console.log(result)
      return result;

    }))
    // result));
  }

  getCountriesAndStates(): Observable<Region[]> {
    return this._http.get(this._apiCountryStateUrl).pipe(map((result: Region[]) => result));
  }

  searchWeatherData(cityName: string): void {
    this._http.get(this.API_URL + cityName + '&APPID=' + this.APPID + '&exclude=current' + '&units=metric').subscribe(response => {
      // console.log(response);
    });

  }

}
