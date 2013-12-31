//creating modules
module.exports = function (dirName, extName, function (err, list) { //perhaps NOT NEEDED
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