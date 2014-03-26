//Request Handlers
var exec = require("child_process").exec; //non blocking operation
var querystring = require("querystring"),
	fs = require("fs"),
	formidable = require("formidable");

module.exports.start = function(response) {
	// body...
	console.log("Request handler 'start' was called..");

	var body = '<html>' +
		'<head>'+
		'<meta http-equiv="Content-Type" content="text/html"; '+
		'charset=UTF-8" />'+
		'</head>'+
		'<body>'+
		'<form action="/upload" enctype="multipart/form-data" method="post">'+
		'<input type="file" name="upload" multiple="multiple" /><br/>'+
		'<input type="submit" value="Upload file" />'+
		'</form>'+
		'</body>'+
		'</html>';

	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write(body);
	response.end();
	/*
	//executes 'ls' command to get file listing inside current dir
	exec("ls -la ../", function (error, stdout, stderr) { //make shell command inside nodejs
		// body...
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(body);
		response.end();
	});
	*/
	/*
	function sleep (milliSeconds) {
		// body...
		var startTime = new Date().getTime();
		while (new Date().getTime() < startTime + milliSeconds);
	}

	sleep(10000);
	*/
};

module.exports.upload = function(response, request) {
	// body...
	console.log("Reuest handler 'upload' was called..");
	var form = new formidable.IncomingForm();
	console.log("About to parse..");
	form.parse(request, function (error, fields, files) {
		// body...
		console.log("parsing done!");

		fs.rename(files.upload.path, "./images/test.png", function (err) {
			// body...
			if(err){
				fs.unlink("./images/test.png");
				fs.rename(files.upload.path, "./images/test.png");
			}
		});
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write("Received image: <br/>");
		response.write("<img src='/show' />");
		response.end();

	});
};

module.exports.show = function (response, postData) {
	// body...
	console.log("Request handler 'show' was called.");
	fs.readFile("./images/test.png", "binary", function (error, file) {
		// body...
		if(error){
			response.writeHead(500, {'Content-Type': 'text/plain'});
			response.write("Error occured: " + error);
			response.end();
		}else{
			response.writeHead(200, {'Content-Type': 'image/png'});
			response.write(file, "binary");
			response.end();
		}
	});
}