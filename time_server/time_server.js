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
