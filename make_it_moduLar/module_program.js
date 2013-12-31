//testing modules on directory listing program

var fs = require('fs');
var path = require('path');
var mymodule = require('./module_export') //loading module to use it in this program


//assigning arguments to the values
var dirName = process.argv[2];
var extName = "."+process.argv[3]; //adding '.' to the provided extension

console.log(mymodule.exp(dirName, extName)); //need to add 3rd argument

console.log(mymodule.test("cat")); //testing the modules






/*
fs.readdir(dirName,function (err, list){ //perhaps NOT NEEDED
	if(err) throw err;

	var result = Array();
	var j = 0;
	for(var i = 0;i<list.length;i++){
		if (path.extname(list[i]) === extName){ //checking the extension
			result[j] = list[i];
			console.log(result[j]); //printing to console "one per line" the filtered files
			j++;
		}
	}
});
*/
