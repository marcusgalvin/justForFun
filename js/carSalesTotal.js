const formatter = new Intl.NumberFormat('en-US', {
    
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})

var readline = require('readline-sync');

var product1 = readline.question("What is you product?");
var p1SalesCount = readline.question("How many Toyotas did you sell?");
var p1Price = readline.question("How much did a Toyota cost?");


var product1 = "Toyota";



// var product2 = "Samsung Galaxy 10";
// var p1SalesCount = 500;
// var p2SalesCount = 510;
// var p1Price = 1050;
// var p2Price = 950;



var p1TotalSalesDollars = formatter.format(p1SalesCount * p1Price);
//var p2TotalSalesDollars = formatter.format(p2SalesCount * p2Price);


console.log("Total sales for the", product1, "is", p1TotalSalesDollars);
//console.log("Total sales for the", product2, "is", p2TotalSalesDollars);