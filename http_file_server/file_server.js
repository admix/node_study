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
    http = require('http'),
    port = process.argv[2],
    file = process.argv[3];

http.createServer(function(req, res) {
  var out = fs.createReadStream(file);

  res.writeHead(200);
  out.pipe(res);

}).listen(port);
//console.log("Listening on 8000");

//Best Solution
/*
var http = require('http')
  var fs = require('fs')

  var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain'
  })

  fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))
*/
