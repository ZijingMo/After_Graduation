# Brief Introduction 
*This file introduces game rules and configuration, UI functionalities, and HTML reference. Programming language: Javascript. Source-code editor: Visual Studio Code*

## - Rules and Configurations 
1. Players must guess a number between the minimum and maximum numbers
2. Players get a certain amount of guesses
3. System notifies player of guesses remaining
4. System notifies player the correct answer if he or she loses the game
5. Let players choose to player again

*These global parameters can be edited in app.js file*
1. Minimum number is one and maxium number is ten 
2. Number of guesses are three
3. Victorious number is a random variable between one and ten

## - Functionalities 
1. The UI will turn into color green when players get the fruit of victory. Page shows the felicitations as well.
2. The UI will turn into color red when players have a bad shot or lose the game. Page shows the encouragements as well. 
3. The equation of random number calculations are as below.
Assume that maximum numbers is ![equation](https://latex.codecogs.com/gif.latex?\gamma), minimum number is ![equation](https://latex.codecogs.com/png.latex?\delta), random number is ![equation](https://latex.codecogs.com/png.latex?x). The equation will be:

   ![equation](https://latex.codecogs.com/png.latex?\bg_white&space;Math.floor(Math.random()*(\gamma-\delta&space;&plus;&space;1)&space;&plus;&space;\delta))

## - Reference 
The UI elements for this project is concise. Only a few of skeleton elements are applied into index.html. The link is https://cdnjs.com/libraries/skeleton  
