// include http module
var http = require('http'),

// add mysql file  fs is for reading and writing files

fs = require('fs');

// create server

http.createServer(function(request,response){

// add listener
response.on('end', function(){

});
// read the file
fs.readFile("test.txt", 'utf-8', function(error,data){
	// write headers
	response.writeHead(200,{
		'Content-Type': 'text/plain',
	});
	data = parseInt(data,10) + 1;
// write incremented number to file
fs.writeFile('test.txt', data);
// end response
response.end("This was refreshed " + data + " times!");
});
}).listen(8080);