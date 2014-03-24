//program: Time Server
/*
Write a TCP time server!

Your server should listen to TCP connections on port 8000. For each
connection you must write the current date & time in the format:

  YYYY-MM-DD hh:mm

followed by a newline character. Month, day, hour and minute must be
zero-filled to 2 integers. For example:

  2013-07-06 07:42
*/
var http = require('http'),
    map = require('through2-map'),
    chunk = "hello bro",
    port = process.argv[2]; //provided website


http.createServer(function(req, res) {

  if (req.method !== 'POST')
  {
    res.end();
  }
  req.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase();
  })).pipe(res);
  /*
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("Hello Violetta");
  res.end();
  */
}).listen(port);
console.log("Listening on: " + port);

//Best Solution
/*
var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (req, res) {
  if (req.method != 'POST')
    return res.end('send me a POST\n')

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(Number(process.argv[2]))
*/
