//testing modules on directory listing program

var fs = require('fs');
var path = require('path');
var mymodule = require('./module_export') //loading module to use it in this program


//assigning arguments to the values
var dirName = process.argv[2];
var extName = "."+process.argv[3]; //adding '.' to the provided extension

//console.log(dirName);
//console.log(mymodule.exp(dirName, extName)); //need to add 3rd argument
mymodule(dirName,extName);
//console.log(mymodule.Test("kitten")); //testing the modules

/*//callback example

function doCallback(callback) {
   callback()
}

doCallback(function() {
   console.log('callback done')
})
*/
