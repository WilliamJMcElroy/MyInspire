import { AppState } from "../AppState.js";
import { Pop } from "../utils/Pop.js";
import { weatherService } from "../services/WeatherService.js";
function _drawWeather() {
    let content = ''
    content += AppState.weather.WeatherTemplate
    document.getElementById('weather').innerHTML = content
}

export class WeatherController {

    constructor() {
        AppState.on('weather', _drawWeather)
        this.getWeather()
    }

    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            Pop.error(error)
            console.error('getWeather Controller Error', error)
        }
    }
    toggleTemp() {
        weatherService.toggleTemp()
    }
}