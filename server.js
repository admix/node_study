//Testing server with HTML
var http = require('http'),
    fs = require('fs'),
    qs = require('qs'), //querystring parser
    port = 8000;

var index = fs.readFileSync("./index.html");

http.createServer(function (req, res){
  if(req.method == 'POST'){
     //pipe to the console
     req.pipe(process.stdout);

     //pipe to the response to view in browser
     res.writeHead(200, {'Content-Type': 'text/plain'});
     req.pipe(res);
  }else{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
  }
}).listen(port);

console.log("Listening on: " + port);
