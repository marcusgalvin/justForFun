var readline = require('readline-sync');
var Fruit = readline.question("Welcome to Felicia's, what kind of fruit would you like?");
var price = readline.question("Great, how many would you like?");

var storename = "Felicia's Fruit Stand";
var motto = "Buy Felicia!";

var fruit = ["Apple", "Orange", "Peach", "Grapefruit"];
var price = [1.00, 1.50, 1.75, 2.00];

function totals(quantity) {
    if (quantity == 1) {
        for (var i = 0; i < 4; i++) {
            console.log("The price of", quantity, fruit[i], "is", quantity * price[i]);
        }
    }
    else {
        for (var i = 0; i < 4; i++) {
            console.log("The price of", quantity, fruit[i] + "s is", quantity * price[i]);

            switch (fruit) {
                case '1':
                    price = price[0];
                    break;
                case '2':
                    price = price[1];
                    break;
                case '3':
                    price = price[2];
                    break;
                case '4':
                    price = price[3];
                    break;
            }

        }

    }

}
totals(1)
totals(2)
totals(3)
totals(4)
totals(5)

