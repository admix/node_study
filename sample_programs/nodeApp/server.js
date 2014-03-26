//server app file

var http = require('http'), //connects http module
	url	 = require('url'), 
	query = require('querystring'),
	express = require("express"),
	logfmt = require("logfmt");
	
var app = express(); 

app.use(logfmt.requestLogger());

//creating server
/*
module.exports.start = function (route, handle) { //passing route as a parameter
	http.createServer(function (request, response) { //calling http function 'createServer'
		//function returns object with method 'listen',
		//which gets port number as an attribute
		// body...

		//var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");

		route(handle, pathname, response, request); //response will go to the router.js

	}).listen(8888);

	console.log("Server has started!");
}
*/
var port = Number(process.env.PORT || 8888);
module.exports.start = function (route, handle) {
	// body...
	app.get('/', function (req, res) {
		// body...
		var pathname = url.parse(req.url).pathname;

		route(handle, pathname, res, req);
		//var port = Number(process.env.PORT || 5000);
	}).listen(port, function () {
		// body...
		console.log("Listening on port: " + port);
	});
};
/* Same as above
var http = require("http");

function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(8888);
*/

