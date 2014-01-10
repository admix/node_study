//creating modules
var path = require('path');
var fs = require('fs');
var result = [];
var j = 0;

module.exports = function (dirName, extName, callback) {
	fs.readdir(dirName, function (err, list){
		
		if(err){
			return callback(err);
		}else{
			//result = list;
			for(var i = 0;i<list.length;i++){
				if (path.extname(list[i]) === extName){ //checking the extension
					list[j] = list[i];
					console.log(list[j]); //printing to console "one per line" the filtered files
					j++;
				}else{

					list.splice(3);

				}

			}
			//console.log(result);
		}
		callback(null,list);
		
		/*
		if(err) return callback(err);
		list.forEach (function (file) {
			// body...
			if (path.extname(file) === '.' + process.argv[3]){
				console.log(file);
			}else{
				list.splice(3);
			}
		});
		callback(null,list);
		*/

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