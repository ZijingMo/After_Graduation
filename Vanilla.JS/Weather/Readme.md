# Brief Introduction
*Programming language: JavaScript. Runtime: Vanilla.JS. Source Editor: Visual Studio Code.*
## Feature
This web application helps us to search weather conditions (forecasting, temperature, humidity, pressure, and wind speed) of a given city all around the world. Compared with her [little sister](https://github.com/ZijingMo/After_Graduation/tree/master/Node.JS/Weather%20app), she focuses on the operations of API and DOM. Minneapolis (US) is default value of the application. The users can click 'change location' icon to get a little dialogue box pops up. After that, users can change major cities in the world, such as San Francisco(US), Kyoto(JP), Beijing(CN), and Paris(FR). Please [click here](https://countrycode.org/) to obtain 2-digit ISO codes of different countries when you are not sure their ISO codes. Chrome's local storage application is able to save the search data for the next use after users close the browser.
## Functionality
*Different files play different roles in the system.*

For app.js file, it instantiates three objects from other files: storage.js, weather.js, and ui.js. There is a little bit usage of Jquery. For storage.js file, it applies the functions of setLocationData() and getLocationData() to change search data and default data in Chrome's local storage. For weather.js file, data is fetched from [openweather](https://openweathermap.org/)'s API. Until now (August 2019), this API is still partial free (60 calls per minutes). For ui.js file, a class, named UI, handles what users see in the html page. Developers could add more features of weather data after reading openweather's API doc.

For index.html file, Cerulean template from [Bootswatch](https://bootswatch.com/cerulean/) was applied into web page design. In case of any usage of bootstrap javascript, the file also contains three links from [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/). Two divisions determine the structure of page. One division, which includes 'container' class, organizes the structure of main data display. The other division, which includes 'modal fade' class, organizes the structure of pop-up window.
## Preview
- **Initial Page (Default Value: Minneapolis)**
![image](https://github.com/ZijingMo/After_Graduation/blob/master/Vanilla.JS/Weather/Previews/Preview1.png)
- **Searching Process**
![image](https://github.com/ZijingMo/After_Graduation/blob/master/Vanilla.JS/Weather/Previews/Preview2.png)
![image](https://github.com/ZijingMo/After_Graduation/blob/master/Vanilla.JS/Weather/Previews/Preview3.png)
- **Return Value**
![image](https://github.com/ZijingMo/After_Graduation/blob/master/Vanilla.JS/Weather/Previews/Preview4.png)
- **Other Search**
![image](https://github.com/ZijingMo/After_Graduation/blob/master/Vanilla.JS/Weather/Previews/Preview5.png)
![image](https://github.com/ZijingMo/After_Graduation/blob/master/Vanilla.JS/Weather/Previews/Preview6.png)
![image](https://github.com/ZijingMo/After_Graduation/blob/master/Vanilla.JS/Weather/Previews/Preview7.png)


## Usage and Miscellanea
1. Loading the file path with Visual Studio Code 
2. Installing and enabling 'Live Server' extension at VS Code extension section
3. Clicking mouse right key and choosing 'Open with Live Server' option at the index.html file 
4. Personal API [registered links](https://home.openweathermap.org/users/sign_up) for openweather
5. [Click here. ](https://vanilla-weather-forecast.herokuapp.com/)(This app has been deployed on Heroku server)

## Reference
1. OpenWeather API document: https://openweathermap.org/current
2. Bootswatch free themes: https://bootswatch.com/ 
