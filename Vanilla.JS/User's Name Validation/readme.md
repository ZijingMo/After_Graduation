# Brief Introduction
*Programming language: JavaScript. Runtime: Vanilla.JS. Source Editor: Visual Studio Code.*

## Feature
This web applet is a simple implement of regular expression. You are able to see some very nice validations for the information verification. Every error message is dynamic display.  

## Functionality
*Different files play different roles in the system.*

For app.js file, four functions are created to determine the utilization of regualr expressions: validateName(), validateZip(), validateEmail(), and validatePhone(). A Simple conditional statement is applied to each function. If the input value passes test() method of regular expression, index.html file will not display false information. On the contrary, index.html file will add a field to prompt improper inputs. The rule of regular expression for each function is as follows.

1. validateName(), uppercase, lowercase letters (a-z, A-Z) and imported word number between 2 and 50 are compliance.  
2. validateZip(), US zip code format, a 5-digit number is essential and a hyphen and 4-digit number are optional. 
3. validateEmail(), normal email format. One particular point: dot-com pattern is between 2 and 5 letters. 
4. validatePhone(), four basic phone number formats are appropriate: xxx-xxx-xxxx, xxx xxx xxxx, xxx.xxx.xxxx, (xxx)xxx-xxxx. Varietal phone format is acceptable, like (xxx)xxx.xxxx. 

For index.html file, it applies bootstrap template. There are four divisions in form section: Name, Zipcode, Email, and Phone Number. When users input the fileds which are not compliance of definitive regular expression in app.js file, class "invalid-feedback" for each section will be activated to show error message. 

## Preview
- **Reasonable Inputs**
![image](https://github.com/ZijingMo/After_Graduation/blob/master/Vanilla.JS/User's%20Name%20Validation/Previews/Preview1.png)
- **Improper Inputs**
![image](https://github.com/ZijingMo/After_Graduation/blob/master/Vanilla.JS/User's%20Name%20Validation/Previews/Preview2.png)
![image](https://github.com/ZijingMo/After_Graduation/blob/master/Vanilla.JS/User's%20Name%20Validation/Previews/Preview3.png)
![image](https://github.com/ZijingMo/After_Graduation/blob/master/Vanilla.JS/User's%20Name%20Validation/Previews/Preview4.png)
![image](https://github.com/ZijingMo/After_Graduation/blob/master/Vanilla.JS/User's%20Name%20Validation/Previews/Preview5.png)
## Usage and Miscellanea
1. Loading the file path with 'Visual Studio Code' application 
2. Installing and enabling 'Live Server' extension at VS Code 'extension' section
3. Clicking mouse right key and choosing 'Open with Live Server' option at the index.html file 

## Reference
1. Regular Expressions in Javascript:  [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions), [W3Schools](https://www.w3schools.com/jsref/jsref_obj_regexp.asp)
2. Html design: [Bootstrap template](https://getbootstrap.com/docs/4.3/getting-started/introduction/), [Poper.JS](https://popper.js.org/popper-documentation.html) 
