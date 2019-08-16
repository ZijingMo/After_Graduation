// Zijing Mo
// UiJS file

class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.humidity = document.getElementById('w-humidity');
        this.pressure = document.getElementById('w-pressure'); 
        this.windSpeed = document.getElementById('w-wind-speed');
		
    }

	paint(weather) {
		this.location.textContent = `${weather.name}, ${weather.sys.country}`;
		this.desc.textContent = weather.weather[0].main;
        this.string.textContent = `${(1.8*(weather.main.temp - 273.15) + 32).toFixed(2)}\u00B0F (${(weather.main.temp - 273.15).toFixed(2)})\u00B0C`;
		this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
		this.pressure.textContent = `Pressure: ${weather.main.pressure} hPa`;
		this.windSpeed.textContent = `Wind Speed: ${(2.23694*(weather.wind.speed)).toFixed(2)} mph`;
    }
    // Notes: Based on Json file, we also implement other features of weather.
}



