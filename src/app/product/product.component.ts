import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Country } from '../model/country';
import { CountryStatesService } from '../services/country-states.service';
import { Region } from '../model/region';
import { $ } from 'protractor';
import { Weather } from '../model/weather';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
    countries:Country[]=[];
    regions:Region[]=[];
    weather:Weather=new Weather();
    default:string="----";
    countryId:string="In";
    cityName:string="Hyderabad"
    showWeatherData:boolean=false;
  constructor(private countryStatesService:CountryStatesService){}
  ngOnInit(): void {
    // this.countryId="In";
    // this.cityName="Hyderabad"
    this.countryStatesService.getCountries().subscribe(countryResponse=> {
      this.countries=countryResponse
      // console.log(this.countries)
    });
    
   
    // this.countryStatesService.getCountriesAndStates().subscribe(countryStatesResponse=>this.region);
  }

  onChange($event){
    this.countryId=$event.target.value;
      this.countryStatesService.getRegions(this.countryId).subscribe(regionResponse=> {
        this.regions=regionResponse
        // console.log(this.region)
      });;
  }

  onChangeRegion($event){
    this.cityName=$event.target.value;
      // this.countryStatesService.getRegions(this.countryId).subscribe(regionResponse=> {
      //   this.regions=regionResponse
      //   // console.log(this.region)
      // });;
      this.countryStatesService.searchWeatherData(this.cityName,this.countryId).subscribe(weatherResponse=> {
        this.weather=weatherResponse;
        console.log(this.weather)
        this.showWeatherData=true;
        
      });
  }


  searchWeatherData(): void {
   
  //  .subscribe(regionResponse=> {
  //   this.region=regionResponse
  //   // console.log(this.region)
  // });;
  }
  




}
