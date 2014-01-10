//creating modules
var path = require('path');
var fs = require('fs');

module.exports.exp = function (dirName, extName) {
fs.readdir(dirName, function (err, list){
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
function Test (animal){
	var an = animal;
	return an;
}
exports.Test = Test;


//module.exports = test;
//module.exports = exp; //exporting the module