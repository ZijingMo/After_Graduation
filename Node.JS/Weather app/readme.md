# Brief Introduction
*This is the second of four applications. There are relations and differences among these four applications.*

*Programming lanauage: JavaScript. Runtime: Node.JS. Library: Express. Text editor: Visual Studio Code. Source code repository: [Redirect here](https://github.com/ZijingMo/Weather-website-nodeJS).*

## Features
Compared with her [elder sister](https://github.com/ZijingMo/After_Graduation/tree/master/Vanilla.JS/Weather), she focuses on the application of express library and coordinations between server and client side. This collection of pages contains four types of page: homepage, 'about' page, 'help' page, and '404' page. Weather and location queries are concentrated on homepage, which is called 'weather' page as well. Because of diverse choice of API, this application has stronger functionalities of weather forecast than her sis as below. 
1. Inputing same city's name from different countries, like London (US) and London (US).
2. Making a very specific address query, such as *1600 Pennsylvania Ave NW* (White House's address).
3. Scenic spot or historical site is valid input, like Buckingham Palace.
4. Multilingual typing is practicable and yet system can't guarantee accurate return value, for instance 皇居 (Japanese Imperial Palace, Tokyo), الرياض (Riyadh, Saudi Arabia)  
5. American zip code is effective as well. 

This application possesses other traits. Since this application is developed on Express library, it simplifies the process of HTTP methods for RESTful services. On the other hand, 'hbs' module runs the function of Handlebars.js. It is a kind of mustache templating lanuage. It keeps the view and the code separated. Instead of all web pages being static documents served up from 'public' directory, they are going to be handlebar-templates. Web developers are able to decide which parts are dynamic and which parts are static in the pages. This design of page could save a lot of time from repetitive operations. 

## Previews
- **The collection of pages (homepage, about, help, 404)**
![image](https://github.com/ZijingMo/After_Graduation/blob/master/Node.JS/Weather%20app/Preview/Preview1.png)
![image](https://github.com/ZijingMo/After_Graduation/blob/master/Node.JS/Weather%20app/Preview/Preview2.png)
![image](https://github.com/ZijingMo/After_Graduation/blob/master/Node.JS/Weather%20app/Preview/Preview3.png)
![image](https://github.com/ZijingMo/After_Graduation/blob/master/Node.JS/Weather%20app/Preview/Preview4.png)
- **Weather forecast application**

  - ***One London two countries***
  ![image](https://github.com/ZijingMo/After_Graduation/blob/master/Node.JS/Weather%20app/Preview/Preview5.png)
  ![image](https://github.com/ZijingMo/After_Graduation/blob/master/Node.JS/Weather%20app/Preview/Preview6.png)
  - ***More Specific...***
  ![image](https://github.com/ZijingMo/After_Graduation/blob/master/Node.JS/Weather%20app/Preview/Preview7.png)
  - ***Good day, Queen!***
  ![image](https://github.com/ZijingMo/After_Graduation/blob/master/Node.JS/Weather%20app/Preview/Preview8.png)
  - ***Still Globalism?***
  ![image](https://github.com/ZijingMo/After_Graduation/blob/master/Node.JS/Weather%20app/Preview/Preview9.png)
  ![image](https://github.com/ZijingMo/After_Graduation/blob/master/Node.JS/Weather%20app/Preview/Preview14.png)
  - ***Try BH90210 :)***
  ![image](https://github.com/ZijingMo/After_Graduation/blob/master/Node.JS/Weather%20app/Preview/Preview10.png)  
- **Error handlers**
![image](https://github.com/ZijingMo/After_Graduation/blob/master/Node.JS/Weather%20app/Preview/Preview11.png)
![image](https://github.com/ZijingMo/After_Graduation/blob/master/Node.JS/Weather%20app/Preview/Preview12.png)
![image](https://github.com/ZijingMo/After_Graduation/blob/master/Node.JS/Weather%20app/Preview/Preview13.png)

## Usage, Modules and Miscellany
*Dollar sign($) in this section means path name*
- **The User and Developer's guidebook**
    1. Downloading Node.js runtime[(12.9.0 or later version)](https://nodejs.org/en/download/current/).
    2. Cloning or downloading [Weather-website-nodeJS](https://github.com/ZijingMo/Weather-website-nodeJS) repository to your local file directory. 
    3. Uncompressing the zip file in appropriate path.
    4. Locating at that path in the terminal or command prompt window (it depends on your operating system).
    5. Installing these modules before running the code (for some OS, user needs to type 'sudo' before 'npm' arguement):
    ```
      $ npm i express@4.17.1 
      $ npm i hbs@4.0.4
      $ npm i request@2.88.0
    ```
    6. Inputing ``$ node src/app.js``. When the sentence of ``Server is up on port  3000`` appears on the screen, it means this app is running properly. 
    7. Turning browsers (Chrome, Safari or others) on and typing `localhost:3000` on address bar.
    8. Enjoying the weather forecasting services!
- **The API Explanation** 
    1. Mapbox: this API supports geo-addressing. It receives location information and returns accurate longitude and latitude for weather forecasting. In August 2019, the usage of 25,000 calls per month is free. You could [sign an account up](https://account.mapbox.com/auth/signup/?route-to=%22/%22) for further or other development.  
    2. Darksky: todo
## Reference
todo
