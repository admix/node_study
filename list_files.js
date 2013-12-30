//program lists file in a given directory
var fs = require('fs');
var path = require('path');

//assigning arguments to the values
var dirName = process.argv[2];
var extName = "."+process.argv[3]; //adding '.' to the provided extension

fs.readdir(dirName,function (err, list){
	if(err) throw err;

  //hard way
	var result = Array();
	var j = 0;
	for(var i = 0;i<list.length;i++){
		if (path.extname(list[i]) === extName){ //checking the extension
			result[j] = list[i];
			console.log(result[j]); //printing to console "one per line" the filtered files
			j++;
		}
	}

  //easy way
	/*list.forEach (function (file) {
		// body...
		if (path.extname(file) === '.' + process.argv[3]){
			console.log(file);
		}
	})*/
});