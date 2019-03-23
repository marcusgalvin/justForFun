// Formatter 
const formatter = new Intl.NumberFormat('en-US', {
 style: 'currency',
 currency: 'USD',
 minimumFractionDigits: 2
});

//Drink menu
var drinkMenu1 = 'Chai Latte'
var drinkPrice1 = 4
var drinkMenu2 = 'Mocha Latte'
var drinkPrice2 = 5
var drinkMenu3 = 'Caramel Latte'
var drinkPrice3 = 6

var readline = require('readline-sync');

//reset variables
var drinkChoice = '';
var drinkPrice; 

//questions
drinkChoice = readline.question(`\nWelcome to Starbucks! How can I help you today?\n\nPlease select a drink below:\n\n   1. ${drinkMenu1}:    $${drinkPrice1} +tax\n   2. ${drinkMenu2}: $${drinkPrice2} +tax\n   3. ${drinkMenu3}:  $${drinkPrice3} +tax\n\nChoose #1, #2, #3?` );
let qtyOfDrinkChoice = readline.question(`\nHow many would you like?` );

//Apply customer's drink choice into generic variable
switch(drinkChoice){
 case '1':
   drinkPrice = drinkPrice1;
   break;
 case '2':
   drinkPrice = drinkPrice2;
   break;
 case '3':
   drinkPrice = drinkPrice3;
   break;
}