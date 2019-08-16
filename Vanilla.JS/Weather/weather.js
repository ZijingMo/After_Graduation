// Zijing Mo
// WeatherJS file

class Weather {
    constructor(city, country) {
        this.apiKey = '13977b8e241b24b996e2439d2e07e21e'; // Input your own API key..
        this.city = city;
        this.country = country;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}`);
        const responseData = await response.json();

        return responseData;
    }

    // Change weather location
    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}

