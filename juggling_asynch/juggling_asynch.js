//program to work with the client side
var fs = require('fs'),
		bl = require('bl'),
		http = require('http'), //http core module
		arg = 2,
		out = "",
		output = "",
		site = process.argv[arg],
		site_1 = process.argv[arg],
		site_2 = process.argv[3],
		site_3 = process.argv[4];//provided website

// Async task
function async(i, arg, callback) {
	http.get(process.argv[i], function (response){
		response.pipe(bl(function (err, data) {
			console.log(data.toString());
		}))
	})
  //console.log('do something with \''+arg+'\', return 1 sec later');
  setTimeout(function() { callback(arg * 2); }, 1000);
}
// A simple async series:
var items = [ 1, 2, 3 ];
var results = [];
function series(item) {
  if(item) {
    async(arg,item, function(result) {
      results.push(result);
			if(arg<5){
			  arg++;
			}
      return series(items.shift());
    });
  }
}
series(items.shift());

/*
Here's what the official solution is if you want to compare notes:

-----------------------------------------------------------------
*/
/*
var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(data)

      results[index] = data.toString()
      count++

      if (count == 3) // yay! we are the last one!
        printResults()
    }))
  })
}

for (var i = 0; i < 3; i++){
  httpGet(i)
}
*/
