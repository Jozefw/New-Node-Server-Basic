// include the http module
var http = require('http');

// also include the url module which parses request params
url = require("url");

// create server

http.createServer(function(request, response){

// listener for request 'end'
	request.on('end', function() {

	});
// parse the request for arguments and sotre them in the _get variable
// the function parses the url from the request and returns an object representation

// parse() is a method of the url module to convert the request url to an object.  The returned object has a query property which retrives the urls params....so put ?data=somestuff....and you will get 'somestuff' back
	var _get = url.parse(request.url, true).query;

	// write headers to the response
	response.writeHead(200, {
		'ContentType': 'text/plain',
	});
	// send data and end response
	response.end("here is your data: " + _get['data']);
}).listen(8080);

