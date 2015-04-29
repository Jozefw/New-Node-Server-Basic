// include http module
http = require('http');

// add mysql module
mysql = require('mysql');

// create connection
// data is default to new mysql install and should be changed according to the configuration
var connection =mysql.createConnection({
	user:"root",
	password: "secret",
	database: "db_name",
});

// create the server as usual
http.createServer(function(request,response){
	request.on('end', function(){
	});
	connection.query('SELECT * FROM your_table;', function(error, rows, fields){
		response.writeHead(200,{
			"content-Type":"x-application/json",
		});
		// send data as JSON string
		// rows variable holds the result of the query.
		response.end(JSON.stringify(rows));
	});
}).listen(8080);