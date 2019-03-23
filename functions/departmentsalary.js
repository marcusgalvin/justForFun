var fs = require('fs');
 
 
 fs.readFile('salarydata.txt',  'utf8', function(err, data) {
   if (err) throw err;
   
   var arraydat = data.split('\n')
   console.log(arraydat);
   
   
   for (var i = 0; i < arraydat.length; i++) {
       console.log("The data on line", i + 1, "is:", arraydat[i]);
       
       
       
   }
 
 
 
 
 
 
 
 
 
 
 
fs.readFile('departmentdata.txt',  'utf8', function(err, data) {
   if (err) throw err;
   
   var arraydat = data.split('\n')
   console.log(arraydat);
   
   
   for (var i = 0; i < arraydat.length; i++) {
       console.log("The data on line", i + 1, "is:", arraydat[i]);
       
       
       
   }
});
 