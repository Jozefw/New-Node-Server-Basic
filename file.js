// include http module
var http = require('http'),

// add fs for reading and writing files

fs = require('fs');

// create server

http.createServer(function(request,response){

// add listener
response.on('end', function(){

});
// read the file takes 3 args file, encoding, callback
fs.readFile("test.txt", 'utf-8', function(error,data){
	if (request.url === '/') {
		console.log(request.url);


			// write headers
			response.writeHead(200,{
				'Content-Type': 'text/plain',
			});
			data = parseInt(data,10) + 1;
		// write incremented number to file...args = file, data, encoding, CB
		fs.writeFile('test.txt', data);
		// end response
		response.end("This was refreshed " + data + " times!");
	} else {
		response.writeHead(404);
		response.end();
	}
});

}).listen(8080);