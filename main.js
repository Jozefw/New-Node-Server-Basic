// include http module
var http = require('http');

// Create a server. Function passed as param is called on every request made.
// request variable holds all request params
// response variable allows you to do anything with the response sent to the client

http.createServer(function(request,response){

	// attach event listener on "end" event
	// the event is called when client sent all data and is waiting for response
	request.on("end", function(){

		// write the headers to the response
		// 200 is success, seconf param holds header fields in an object,
		// since we are sending plain text content/type should be tex/plain
		response.writeHead(200,{
			'Content-Type': 'text/plain',
		});
		response.write("hello from your server");
		// Send data and end response
		response.end("Get a Front End job! ");
	});
	// Listen on port 8888


}).listen(8888);