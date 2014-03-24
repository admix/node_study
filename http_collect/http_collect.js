//program collecting info from user
var fs = require('fs'),
    bl = require('bl'),
    http = require('http'), //http core module
    site = process.argv[2]; //provided website

http.get(site, function (response) {
  response.pipe(bl(function (err, data) {
    console.log(data.toString().length); //number of characters
    console.log(data.toString()); //response
  }));

});
