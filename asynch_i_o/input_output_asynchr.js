//node.js way of reading files
var fs = require('fs');
fs.readFile(process.argv[2],function (err, data) {
	// body...
	if(err) throw err;
	var newLines_easy = data.toString().split('\n').length - 1;
	console.log(newLines_easy);
});