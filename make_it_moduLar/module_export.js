//creating modules
var path = require('path');
var fs = require('fs');

module.exports = function (dirName, extName, callback) {
	fs.readdir(dirName, function (err, list){
		if(err) return callback(err);
		else{
			var result = [];
			var j = 0;
			for(var i = 0;i<list.length;i++){
				if (path.extname(list[i]) === extName){ //checking the extension
					result[j] = list[i];
					console.log(result[j]); //printing to console "one per line" the filtered files
					j++;
				}
			}
			return callback(null,result);
		}
	  //easy way
		/*list.forEach (function (file) {
			// body...
			if (path.extname(file) === '.' + process.argv[3]){
				console.log(file);
			}
		})*/
	});
};

//testing the modules

//module.exports = test;
//module.exports = exp; //exporting the module