var fs = require('fs')
var dsr = {

        departmentId: [],
        departments: [],
        employeeId: [],
        employeeName: [],
        salaries: [],

        loadDeptNames: function() {

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

                    dsr.departmentId.push(deptDataArray[i].slice(2, 6));
                dsr.departments.push(deptDataArray[i].slice(9, -3));
                }

                //create multi- d arrays usuing the length of the number of depts

                for (var i = 0; i < deptDataArray.length; i++) {
                   dsr.employeeId.push([]);
                dsr.employeeName.push([]);
                dsr.salaries.push([]);
                }



            });

        },


        loadDeptEmp: function() {

            fs.readFile('load_dept_emp.txt', 'utf8', function(err, data) {
                if (err) throw err;
                var employeeDataClean = data.replace(/INSERT INTO `dept_emp` VALUES /g, "");

                var employeeDataArray = employeeDataClean.split('\n');

                for (var i = 0; i < employeeDataArray.length; i++) {
                    if (employeeDataArray[i].slice(28, 32) == '9999') {

                        dsr.employeeId[dsr.departmentId.indexOf(employeeDataArray[i].slice(8, 12))].push(employeeDataArray[i].slice(1, 6));
                    }
                }


            });
        },

loadDeptSalaries: function() {

        fs.readFile('salaries.txt', 'utf8', function(err, data) {
            if (err) throw err;


            var salaryDataClean = data.replace(/INSERT INTO `salaries` VALUES /g,
                "");
            var salaryDataArray = salaryDataClean.split('\n');


            for (var i = 0; i < salaryDataArray.length; i++) {



                //console.log("Salary:")
                //console.log(salaryDataArray[i].slice(27, 31));
                if (salaryDataArray[i].slice(27, 31) == '9999') {
                    //console.log("Current Salary, EmployeeId:");
                    //console.log(salaryDataArray[i].slice(1, 6));

                    for (var j = 0; j < dsr.employeeId.length; j++) {
                        for (var k = 0; k < dsr.employeeId[j].length; k++) {

                            // employeeId = [ [], [], [], [], [], [], [], [], [] ]
                            if (salaryDataArray[i].slice(1, 6) == dsr.employeeId[j][k]) {

                               dsr.salaries[j].push(salaryDataArray[i].slice(7, 12));
                            }

                        }
                    }
                }
            }
            //console.log("salaries array:");
            //console.log(dsr.salaries);
        });

    },

loadEmpName: function () {

fs.readFile('load_employee.txt', 'utf8', function(err, data) {
if (err) throw err;

var nameSplit, nameSplitId, joinedNames;

var nameDataClean = data.replace(/INSERT INTO `employees` VALUES /g, "");
var nameDataArray = nameDataClean.split('\n');

for (var i = 0; i < nameDataArray.length; i++) {

nameSplit = nameDataArray[i].split(',');
nameSplitId = nameSplit[0].replace(/\(/g, "");



for (var j = 0; j < dsr.employeeId.length; j++) {

for (var k = 0; k < dsr.employeeId[j].length; k++) {

if (dsr.employeeId[j][k] == nameSplitId) {
//["a", "b", "c", "d"].slice(1,3).join("-") //b-c 
// employeeName[j].push(nameSplit.slice(2,4).join(" ")

// console.log(nameSplit[2].replace(/'/g, ""), nameSplit[3].replace(/'/g, ""));

joinedNames = nameSplit[2].replace(/'/g, "") + " " + nameSplit[3].replace(/'/g, "");
dsr.employeeName[j].push(joinedNames);

}
}
}
}

});

},



finaReport: function() {
    
    var totalCompanySalary = 0;
    
    for (var i = 0; i < dsr.departmentId.length; i++) {
        var salaryTotal = 0;
        
       console.log(`Department ${dsr.departmentId[i]} - ${dsr.departments[i]}:`);
        for (var j = 0; j < dsr.salaries[i].length; j++) {
            salaryTotal += parseInt(dsr.salaries[i][j]);
            console.log( "Employee ID:", dsr.employeeId[i][j],   "Name:", dsr.employeeName[i][j])
        }
        totalCompanySalary += salaryTotal;
        console.log("Total combined salaries:", salaryTotal);
    
    console.log("The companys entire salary total:", totalCompanySalary);
    
}


},

runFunction : function() {
    this.loadDeptNames();
    this.loadDeptEmp();
    this.loadDeptSalaries();
    this.loadEmpName();
    setTimeout(this.finaReport, 1000 );
    
}

};
dsr.runFunction()