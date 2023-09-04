import { WeatherController } from "../controllers/WeatherController.js"
export class Weather {

    constructor(data) {
        this.name = data.name
        this.tempF = 1.8 * (data.main.temp - 273) + 32
        this.tempC = (data.main.temp - 273.15)
        this.toggle = true

    }

    get WeatherTemplate() {

        return `
        <div class="form-check form-switch ">
        <input id="weatherInput" ${this.toggle ? 'checked' : ''} class="form-check-input" id="custom-input" type="checkbox" role="switch" placeholder="" onchange="app.WeatherController.toggleTemp()">
        <label class="form-check-label" for="flexSwitchCheckChecked">${this.toggle ? 'F:' : 'C:'}</label>
        ${this.toggle ? this.tempF.toFixed() : this.tempC.toFixed()}
        <p><span>In:</span>${this.name}</p>
        </div>
        `
    }
}
