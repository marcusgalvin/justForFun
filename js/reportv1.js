var name = "Sales Report";
var departmentId = ["d001", "d002", "d003", "d004", "d005", "d006", "d007", "d008", "d009"];
var departments = ["marketing", "finance", "HR", "production", "development", "quality managment", "sales", "research", "customer service"];
var employeeId = [[17], [], [05, 13], [3, 4, 18, 20], [1, 6, 8, 12, 14], [9, 10], [2, 16], [7, 15, 19], [11]];
var salaries = [[99651], [], [94692, 68901], [43311, 74057, 84672, 47017], [88958, 59755, 52668, 54423, 60598], [94409, 80324], [72527, 77935], [88070, 40000, 50032], [56753]];
var employeeName = [["Cristinel"], [""], ["Kyoichi", "Eberhardt"], ["Parto", "Chirstian", "Kazuhide", "Mayuko"], ["Georgi", "Anneke", "Saniya", "Patricio", "Berni"], ["Sumant", "Duangkaew"], ["Bezalel", "Kazuhito"], ["Tzvetan", "Guoxiang", "Lillian"], ["Mary"]];



var grandTotal = 0;
for (var i = 0; i < departmentId.length; j++) {
    var subTotal = 0;
    console.log('');
    console.log(`Department ${departmentId[i]} - ${departments[i]}:`);
    
    for(var j = 0; j < employeeName[i].length; j++) {
        
        var totals = salaries[i][j];
        console.log(` ${j+1} Employee ID: ${employeeId[i][j]}, Name: ${employeeName[i][j]},
            Salary: ${salaries[i][j]}`);
        
        subTotal += totals;
        grandTotal += totals;
    }
    
    console.log("-----------------");
    console.log('The Subtotal annual Salary for', departments[i], 'is', subTotal);
}

console.log('');
console.log('The Grand Total for all of the departments is', grandTotal);












    

