var fs = require('fs');
var dsr = {

    departmentId: [],
    departments: [],
    employeeId: [],
    employeeName: [],
    salaries: [],

    load_dept: function() {
        fs.readFileSync('load_dept_names.txt', 'utf8', function(err, data) {
            if (err) throw err;

            var deptDataClean = data.replace(/INSERT INTO `departments` VALUES \n/g, "");
            var deptDataArray = deptDataClean.split('\n');
                deptDataArray.shift();
                

            for (var i = 0; i < deptDataArray.length; i++) {
                // populate single-d arrays with DATA
                // departmentId.push(d001);
                dsr.departmentId.push(deptDataArray[i].slice(2, 6));
                dsr.departments.push(deptDataArray[i].slice(9, -3));

                // populate multi-d arrays with empty sub-arrays [] (NO DATA!!!)

                dsr.employeeId.push([]);
                dsr.employeeName.push([]);
                dsr.salaries.push([]);
            }

            // employeeId[[], [], [], [], [], [], [], [], []];
        });
    }
}