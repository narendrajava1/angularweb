import { Situation } from './situation'
import { WeatherTempPressure } from './weather-temp-pressure'
import { Place } from './place'

export class Weather {

    coord: {
        lon: number,
        lat: number
    };
    weather: Array<Situation>;
    tempPressure:WeatherTempPressure;
    place:Place;


}
