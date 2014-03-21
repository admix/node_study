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
var net = require('net'),
    bl = require('bl'),
    http = require('http'), //http core module
    site = process.argv[2]; //provided website

var date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    hour = date.getHours(),
    min = date.getMinutes(),
    finalDate = year + "-0" + month + "-" + day + " 0" + hour +":"+min;

var server = net.createServer(function(connection) {
  connection.write(finalDate + "\n");
  connection.end();
  //connection.end(data);
})
server.listen(8000);


//Best Solution
/*
var net = require('net')

function zeroFill(i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  var d = new Date()
  return d.getFullYear() + '-'
    + zeroFill(d.getMonth() + 1) + '-'
    + zeroFill(d.getDate()) + ' '
    + zeroFill(d.getHours()) + ':'
    + zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})
server.listen(8001)
*/
