//creating modules

exports.exp = function (dirName, extName){
	var ret = dirName + extName;
	return ret;
};


//testing the modules
exports.test = function (animal){
	var an = animal;
	return an;
}


//module.exports = test;
//module.exports = exp; //exporting the module