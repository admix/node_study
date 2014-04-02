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

  var query = url.parse(req.url, true);
  var path = query['pathname'].split('/');
  var date = new Date(query.query.iso);
  console.log(date.getTime());
  //console.log("Request for " + pathname + " received.");
  res.writeHead(200, {'Content-Type': 'application/json'});
  if(path[2] == 'parsetime'){
    var parsetime = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };

    res.write(JSON.stringify(parsetime));
    res.end();

  } else if(path[2] == 'unixtime'){
      var unixtime = {
      unixtime: date.getTime()
    }

    res.write(JSON.stringify(unixtime));
    res.end();

  } else{
      res.end("404 error");
  }

}).listen(port, function () {
  // body...
  console.log("Listening on port: " + port);
});

//Best Solution
/*
    var http = require('http')
    var url = require('url')

    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }

    function unixtime (time) {
      return { unixtime : time.getTime() }
    }

    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result

      if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time)
      else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time)

      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))
*/
