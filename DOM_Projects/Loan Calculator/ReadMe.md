# Brief Introduction
*This file introduces algorithm of loan calculator, methods and usage of app.js, and reference of index.html. Programming language: Javascript. Source-code editor: Visual Studio Code*   

## - Algorithm

Let us assume that load amount (principle) is ![equation](https://latex.codecogs.com/png.latex?\dpi{100}&space;\bg_white&space;\fn_cs&space;\alpha) , interest rate is ![equation](https://latex.codecogs.com/png.latex?\dpi{100}&space;\bg_white&space;\fn_cs&space;\beta), repayment period is ![equation](https://latex.codecogs.com/png.latex?\dpi{100}&space;\bg_white&space;\fn_cs&space;\tau)(based on each month), and monthly payment is ![equation](https://latex.codecogs.com/png.latex?\dpi{120}&space;\bg_white&space;\fn_cs&space;x). The change of credit line as below:

after first month:  ![equation](https://latex.codecogs.com/gif.latex?\fn_cs&space;\alpha_1&space;=&space;\alpha(1&plus;\beta)&space;-&space;x)

second month:  ![equation](https://latex.codecogs.com/gif.latex?\fn_cs&space;\alpha_2&space;=&space;\alpha_1(1&plus;\beta)&space;-&space;x&space;=&space;[\alpha(1&plus;\beta)&space;-&space;x](1&plus;\beta)&space;-&space;x&space;=&space;\alpha(1&plus;\beta)^2&space;-&space;x[(1&plus;\beta)&plus;1])

thrid month: ![equation](https://latex.codecogs.com/gif.latex?\fn_cs&space;\alpha_3&space;=&space;\alpha_2(1&plus;\beta)&space;-&space;x&space;=&space;\alpha(1&plus;\beta)^3&space;-&space;x[(1&plus;\beta)^2&space;&plus;&space;(1&plus;\beta)&plus;1]) 

**...**

nth month: ![equation](https://latex.codecogs.com/gif.latex?\fn_cs&space;\alpha_n&space;=&space;\alpha_{n-1}(1&plus;\beta)&space;-&space;x&space;=&space;\alpha(1&plus;\beta)^n&space;-&space;x[(1&plus;\beta)^{n-1}&space;&plus;&space;(1&plus;\beta)^{n-2}&plus;&space;...&space;&plus;(1&plus;\beta)^2&space;&plus;&space;(1&plus;\beta)&space;&plus;&space;1])

After simplification:

![equation](https://latex.codecogs.com/gif.latex?\fn_cs&space;\alpha(1&plus;\beta)^n&space;-&space;\frac{x[(1&plus;\beta)^n&space;-&space;1]}{\beta})

Since we know that the repayment period is ![equation](https://latex.codecogs.com/png.latex?\dpi{100}&space;\bg_white&space;\fn_cs&space;\tau), the equation will be as follow.

![equation](https://latex.codecogs.com/gif.latex?\fn_cs&space;\alpha_\tau&space;=&space;\alpha(1&plus;\beta)^\tau&space;-&space;\frac{x[(1&plus;\beta)^\tau&space;-&space;1]}{\beta}&space;=&space;0)

As a result,

![equation](https://latex.codecogs.com/gif.latex?\fn_cs&space;x=&space;\frac{\alpha\beta[(1&plus;\beta)^\tau]}{(1&plus;\beta)^\tau&space;-&space;1})


## - Methods and Usage

Methods: 

Based on DOM tree, these methods are applied: *getElementById(), addEventListener(), createElement(), querySelector(), appendChild(), insertBefore().* Other methods in this code: *parseFloat(), Math.pow(), isFinite(), setTimeout(), remove().*

Usage:

- Loading the folder with Visual Studio Code 
- Enabling 'Live Server' extension at Visual Studio Code extension section
- Clicking mouse right key and choosing 'Open with Live Server' option 

## - Reference
Bootstrap.com provides the template: https://getbootstrap.com/docs/4.3/getting-started/introduction/. In the 'img' file folder, there are three .gif files for changing the loading style. These files are from: https://gifer.com/en/UbTh.  


