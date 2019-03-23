var fs = require("fs");

// step 1: create all single-d and multi-d arrays as empty arrays (initially)
//push single string data/ elements into an array as a single element
//push array data into an array to form multi-d arrays

// Single dimension arrays    
var departmentId = [];
var departments = [];

// Multi dimensional arrays (currently single, change later)
var employeeId = [];
var salaries = [];
var employeeName = [];

// Process the file load 'departments.txt'
fs.readFile('departments.txt', 'utf8', function(err, data) {
    if (err) throw err;

    // remove the uneeded string from the first line
    var deptDataClean = data.replace(/INSERT INTO `departments` VALUES/g, "");

    //convery cleaned data into a temporyary array. Each line will be na array element.

    var deptDataArray = deptDataClean.split('\n');
    deptDataArray.shift();



    // grab the department id and the department name and push them into their respective single-d arrays

    for (var i = 0; i < deptDataArray.length; i++) {
        //var deptId = deptDataArray[i].slice(2,6);
        //console.log(deptId);

        departmentId.push(deptDataArray[i].slice(2, 6));
        departments.push(deptDataArray[i].slice(9, -3));
    }

    //create multi- d arrays usuing the length of the number of depts

    for (var i = 0; i < deptDataArray.length; i++) {
        employeeId.push([]);
        employeeName.push([]);
        salaries.push([]);
    }




});

// process the file "departments.txt"
// (10002,'d007','1996-08-03','9999-01-01'),
// multi-d array = employeeId

fs.readFile('load_dept_emp.txt', 'utf8', function(err, data) {
    if (err) throw err;
    var employeeDataClean = data.replace(/INSERT INTO `dept_emp` VALUES /g, "");

    var employeeDataArray = employeeDataClean.split('\n');
    
    for (var i = 0; i < employeeDataArray.length; i++) {
        if (employeeDataArray[i].slice(28, 32) == '9999') {

            employeeId[departmentId.indexOf(employeeDataArray[i].slice(8, 12))].push(employeeDataArray[i].slice(1, 6));
        }
    }


});

// salary arrays
var salaryDataClean;
var salaryDataArray;


fs.readFile('salaries.txt', 'utf8', function(err, data) {
    if (err) throw err;
    

    salaryDataClean = data.replace(/INSERT INTO `salaries` VALUES /g,
    "");
    salaryDataArray = salaryDataClean.split('\n');


    for (var i = 0; i < salaryDataArray.length; i++) {
   
     
    
    //console.log("Salary:")
    //console.log(salaryDataArray[i].slice(27, 31));
        if (salaryDataArray[i].slice(27, 31) == '9999') {
            //console.log("Current Salary, EmployeeId:");
            //console.log(salaryDataArray[i].slice(1, 6));

            for (var j = 0; j < employeeId.length; j++) {
                for (var k = 0; k < employeeId[j].length; k++) {

// employeeId = [ [], [], [], [], [], [], [], [], [] ]
                    if (salaryDataArray[i].slice(1, 6) == employeeId[j][k]) {

                        salaries[j].push(salaryDataArray[i].slice(7, 12));
                    }

                }
        }
        }
    }
    console.log("salaries array:")
    console.log(salaries);
});

fs.readFile('load_employee.txt', 'utf8', function(err, data) {
if (err) throw err;

var nameSplit, nameSplitId, joinedNames;

var nameDataClean = data.replace(/INSERT INTO `employees` VALUES /g, "");
var nameDataArray = nameDataClean.split('\n');

for (var i = 0; i < nameDataArray.length; i++) {

nameSplit = nameDataArray[i].split(',');
nameSplitId = nameSplit[0].replace(/\(/g, "");



for (var j = 0; j < employeeId.length; j++) {

for (var k = 0; k < employeeId[j].length; k++) {

if (employeeId[j][k] == nameSplitId) {
//["a", "b", "c", "d"].slice(1,3).join("-") //b-c 
// employeeName[j].push(nameSplit.slice(2,4).join(" ")

// console.log(nameSplit[2].replace(/'/g, ""), nameSplit[3].replace(/'/g, ""));

joinedNames = nameSplit[2].replace(/'/g, "") + " " + nameSplit[3].replace(/'/g, "");
employeeName[j].push(joinedNames);

}
}
}
}


console.log("employeeName");
console.log(employeeName);

console.log(employeeName[0][0]);




});


function finalReport() {
    
    var totalCompanySalary = 0;
    
    for (var i = 0; i < departmentId.length; i++) {
        var salaryTotal = 0;
        
       console.log(`Department ${departmentId[i]} - ${departments[i]}:`);
        for (var j = 0; j < salaries[i].length; j++) {
            salaryTotal += parseInt(salaries[i][j]);
            console.log( "Employee ID:", employeeId[i][j],   "Name:", employeeName[i][j])
        }
        totalCompanySalary += salaryTotal;
        console.log("Total combined salaries:", salaryTotal);
    
    console.log("The companys entire salary total:", totalCompanySalary);
}
}