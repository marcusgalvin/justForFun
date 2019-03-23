var fs = require("fs");


// objects
var departments = {
    
};

var departmentId = {
    
}

var employeeId = {
    
};

var employeeName = {
    
};

var salaries = {
    
};


// Process the file load 'departments.txt'
fs.readFile('departments.txt', 'utf8', function(err, data) {
    if (err) throw err;

    // remove the uneeded string from the first line
    var deptDataClean = data.replace(/INSERT INTO `departments` VALUES/g, "");

    //convery cleaned data into a temporyary array. Each line will be na array element.

    var deptDataArray = deptDataClean.split('\n');




    // grab the department id and the department name and push them into their respective single-d arrays

    for (var i = 0; i < deptDataArray.length; i++) {
        

        departmentId.push(deptDataArray[i].slice(2, 6));
       
    }

    




});