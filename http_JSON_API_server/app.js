//program: File Server
/*
Write an HTTP server that serves JSON data when it receives a GET request to the path '/api/parsetime'. Expect the request to contain a query string with a key 'iso' and an ISO-format time as the value.

For example:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

The JSON response should contain only 'hour', 'minute' and 'second' properties. For example:

    {
      "hour": 14,
      "minute": 23,
      "second": 15
    }

Add second endpoint for the path '/api/unixtime' which accepts the same query string but returns UNIX epoch time under the property 'unixtime'. For example:

    { "unixtime": 1376136615474 }

Your server should listen on the port provided by the first argument to your program.

-------------------------------------------------------------------------------
*/
var fs = require('fs'),
    url = require('url'),
    http = require('http'),
    port = process.argv[2],
    file = process.argv[3];

http.createServer(function(req, res) {

  var pathname = url.parse(req.url).pathname;
  console.log("Request for " + pathname + " received.");
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write("../README.md");
  res.end();

}).listen(port, function () {
  // body...
  console.log("Listening on port: " + port);
});

//Best Solution
/*

*/
