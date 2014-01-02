//program to work with the client side 
var fs = require('fs'); 
var http = require('http'); //http core module
var site = process.argv[2]; //provided website

http.get(site,function (res) { //response
	// body...
	
	//console.log("got response: " + res.statusCode); //getting status code
	res.setEncoding('utf8');
	res.on('data', function (data) { //fun callback
		// body...
		console.log('' + data);
	})
	res.on('error', console.error)
})/*.on('data', function (data) {
	// body...
	console.log("Got data: " + data);
}).on('error', function (e) { //error
	// body...
	console.log("Got error: " + e.message);
})*/




/* //easy asnwer
var http = require('http')

      http.get(process.argv[2], function (response) {
        response.setEncoding('utf8')
        response.on('data', console.log)
        response.on('error', console.error)
      })
*/

