var fs = require('fs');
var file = fs.readFileSync(process.argv[2],'utf8'); //reading the file and storing in the variable
var newLines_easy = file.toString().split('\n').length - 1;
var newLines = 0;
for(var i = 0;i<file.length;i++){
	if(file[i]=='\n'){
		newLines += 1;
	}
}
//console.log(file);
console.log("with loop: "+newLines);
console.log("easy: "+newLines_easy);