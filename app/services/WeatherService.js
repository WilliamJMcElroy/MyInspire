import { api } from "./AxiosService.js";
import { AppState } from "../AppState.js";
import { Weather } from "../models/Weather.js";


class WeatherService {
    async getWeather() {
        let res = await api.get('/api/weather')
        AppState.weather = new Weather(res.data)
    }

    toggleTemp() {
        AppState.weather.toggle = !AppState.weather.toggle
        AppState.weather = AppState.weather
    }
}

export const weatherService = new WeatherService()

