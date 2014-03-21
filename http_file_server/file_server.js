//program: File Server
/*
Write an HTTP server that serves the same text file for each request
it receives.

You will be provided with the location of the file to serve as the
first command-line argument. You must use the `fs.createReadStream()`
method to stream the file contents to the response.

Your server should listen on port 8000.
*/
var fs = require('fs'),
    bl = require('bl'),
    http = require('http');

var server = http.createServer(function(request, response) {
  connection.write("");
  connection.end();
  //connection.end(data);
})
server.listen(8000);


//Best Solution
/*

*/
