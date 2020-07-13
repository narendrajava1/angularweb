import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Country } from '../model/country';
import { CountryStatesService } from '../services/country-states.service';
import { Region } from '../model/region';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
    countries:Country[];
    region:Region[];
    default:string="----";
  constructor(private countryStatesService:CountryStatesService){}
  ngOnInit(): void {
    this.countryStatesService.getCountries().subscribe(countryResponse=> this.countries=countryResponse);
    // this.countryStatesService.getCountriesAndStates().subscribe(countryStatesResponse=>this.region);
  }

  onChange($event:Event){

    console.log($event)
  }

  searchWeatherData(cityName: string): void {
    // this._http.get(this.API_URL + cityName + '&APPID=' + this.APPID + '&exclude=current' + '&units=metric').subscribe(response => {
      // console.log(response);
    // });
  }
  




}
