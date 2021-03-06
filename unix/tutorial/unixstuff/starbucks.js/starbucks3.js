// Currency script
const formatter = new Intl.NumberFormat('en-US', {
 style: 'currency',
 currency: 'USD',
 minimumFractionDigits: 2
});


// Javbucks server:
let servName = 'Steve';

// Javbucks current drinks:
var drinkMenu = ['Caramel Latte','Shaken Sweet Tea','Nitro Cold Brew'];
let drinkPrice = [2, 3, 4];
console.log(drinkMenu);



var readline = require('readline-sync');

// Reset variables
let custDrinkChoice = '';
//let drinkPrice;

// Welcome questions
custDrinkChoice = readline.question(`\nWelcome to Javbucks! My name is ${servName}, how can I help you today?\n\nPlease select a drink below:\n\n   1. ${drinkMenu[0]}:    $${drinkPrice[0]} +tax\n   2. ${drinkMenu[1]}: $${drinkPrice[1]} +tax\n   3. ${drinkMenu[2]}:  $${drinkPrice[2]} +tax\n\nChoose #1, #2, #3?` );
let qtyOfDrinkChoice = readline.question(`\nHow many would you like?` );

console.log(custDrinkChoice);


//Apply customer's drink choice into generic variable
switch(custDrinkChoice){
 case '1':
   drinkPrice = drinkPrice[0];
   break;
 case '2':
   drinkPrice = drinkPrice[1];
   break;
 case '3':
   drinkPrice = drinkPrice[2];
   break;
}


// Calculate drinks, quantity, and taxes
const drinkOrderCalc = qtyOfDrinkChoice * drinkPrice;
const saleTaxCalc = drinkOrderCalc * .07;
const totalCustOrder = formatter.format(drinkOrderCalc + saleTaxCalc);

console.log(totalCustOrder);


// Based on drink choice, apply correct message
if(custDrinkChoice == 1) {
 console.log('\n--------------------\nYour ' + drinkMenu[0] + ' is ready! Total today is: ' + totalCustOrder + '\nAgain, my name is ' + servName + '. Thanks for stopping by!\n--------------------\n\n');
} else if(custDrinkChoice == 2) {
 console.log('\n--------------------\nYour ' + drinkMenu[1] + ' is ready! Total today is: ' + totalCustOrder + '\nAgain, my name is ' + servName + '. Thanks for stopping by!\n--------------------\n\n');
} else if(custDrinkChoice == 3) {
 console.log('\n--------------------\nYour ' + drinkMenu[2] + ' is ready! Total today is: ' + totalCustOrder + '\nAgain, my name is ' + servName + '. Thanks for stopping by!\n--------------------\n\n');
}

