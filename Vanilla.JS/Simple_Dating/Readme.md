# Brief Introduction
*Programming language: JavaScript. Runtime: Vanilla.JS. Source Editor: Visual Studio Code.*

## Feature
This simple web application applies ES6 new feature: iterator. It creates a little profile scroller acts like a dating site. The user will see a picture of someone with some information and click next-like button to the next profile and so on. For simplifying coding procedures, the data is just going to be hard coded. It means that the data will not come from database or some kind of backend. One thing to note that all information in this app is fake. 
## Functionality
*Different files play different roles in the system.*

For app.js file, the main roles are profileIterator() and nextProfile(). For the former, there is a condition statement inside itself. If current data entry is available, the function will print every information from hard-coding data onto the html file. However, if the current data entry is undefined, this means that there is no more information to be fetched from data array. As a result, the web application will be reloaded. For the latter, it will decide whether data should be fetched in accordance with length of data array and a build-in counter 'nextIndex'.

For index.html file, it applies bootstrap starter template to implement CSS functionality. In the head section, a heart icon from other website beautifies tab display. In the body section, division 'imageDisplay' and 'profileDisplay' handle data information display. 

## Preview
- **4/9 candidates' profiles**
![image](https://github.com/ZijingMo/After_Graduation/blob/master/Vanilla.JS/Simple_Dating/Previews/Preview1.png)
![image](https://github.com/ZijingMo/After_Graduation/blob/master/Vanilla.JS/Simple_Dating/Previews/Preview2.png)
![image](https://github.com/ZijingMo/After_Graduation/blob/master/Vanilla.JS/Simple_Dating/Previews/Preview6.png)
![image](https://github.com/ZijingMo/After_Graduation/blob/master/Vanilla.JS/Simple_Dating/Previews/Preview5.png)

## Usage and Miscellanea
1. Loading the file path with 'Visual Studio Code' application 
2. Installing and enabling 'Live Server' extension at VS Code 'extension' section
3. Clicking mouse right key and choosing 'Open with Live Server' option at the index.html file 

## Reference
1. Iterator and Generator in JS:  [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
2. Bootstrap and PoperJS Docs: [Bootstrap Starter Template Utilities](https://getbootstrap.com/docs/4.3/utilities/borders/), [Poper.JS](https://popper.js.org/popper-documentation.html)
3. Icon and Profiles: [Tab Icon Design](https://icons8.com/), [Random User Generator](https://randomuser.me/documentation)
