// Currency script
const formatter = new Intl.NumberFormat('en-US', {
 style: 'currency',
 currency: 'USD',
 minimumFractionDigits: 2
});

// Javbucks server:
let servName = 'Steve';

// Javbucks current drinks:
let drinkMenu1 = 'Caramel Latte';
let drink1Price = 2;
let drinkMenu2 = 'Shaken Sweet Tea';
let drink2Price = 3;
let drinkMenu3 = 'Nitro Cold Brew';
let drink3Price = 4;


var readline = require('readline-sync');

// Reset variables
let custDrinkChoice = '';
let drinkPrice;

// Welcome questions
custDrinkChoice = readline.question(`\nWelcome to Javbucks! My name is ${servName}, how can I help you today?\n\nPlease select a drink below:\n\n   1. ${drinkMenu1}:    $${drink1Price} +tax\n   2. ${drinkMenu2}: $${drink2Price} +tax\n   3. ${drinkMenu3}:  $${drink3Price} +tax\n\nChoose #1, #2, #3?` );
let qtyOfDrinkChoice = readline.question(`\nHow many would you like?` );

//Apply customer's drink choice into generic variable
switch(custDrinkChoice){
 case '1':
   drinkPrice = drink1Price;
   break;
 case '2':
   drinkPrice = drink2Price;
   break;
 case '3':
   drinkPrice = drink3Price;
   break;
}

// Calculate drinks, quantity, and taxes
const drinkOrderCalc = qtyOfDrinkChoice * drinkPrice;
const saleTaxCalc = drinkOrderCalc * .07;
const totalCustOrder = formatter.format(drinkOrderCalc + saleTaxCalc);

// Based on drink choice, apply correct message
if(custDrinkChoice == 1) {
 console.log('\n--------------------\nYour ' + drinkMenu1 + ' is ready! Total today is: ' + totalCustOrder + '\nAgain, my name is ' + servName + '. Thanks for stopping by!\n--------------------\n\n');
} else if(custDrinkChoice == 2) {
 console.log('\n--------------------\nYour ' + drinkMenu2 + ' is ready! Total today is: ' + totalCustOrder + '\nAgain, my name is ' + servName + '. Thanks for stopping by!\n--------------------\n\n');
} else if(custDrinkChoice == 3) {
 console.log('\n--------------------\nYour ' + drinkMenu3 + ' is ready! Total today is: ' + totalCustOrder + '\nAgain, my name is ' + servName + '. Thanks for stopping by!\n--------------------\n\n');
}


//console.log(custDrinkChoice);
/*
switch(custDrinkChoice) {
 case '1':
     console.log('\n--------------------\nYour ' + drinkMenu1 + ' is ready! Total today is: ' + totalCustOrder + '\nAgain, my name is ' + servName + '. Thanks for stopping by!\n--------------------\n\n');
     break;
 case '2':
     console.log('\n--------------------\nYour ' + drinkMenu2 + ' is ready! Total today is: ' + totalCustOrder + '\nAgain, my name is ' + servName + '. Thanks for stopping by!\n--------------------\n\n');
     break;
 case '3':
     console.log('\n--------------------\nYour ' + drinkMenu3 + ' is ready! Total today is: ' + totalCustOrder + '\nAgain, my name is ' + servName + '. Thanks for stopping by!\n--------------------\n\n');
     break;
 default:
     console.log("Error!")
};
*/