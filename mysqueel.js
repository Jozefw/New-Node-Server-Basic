var http = require('http');
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'me',
	password: 'secret',
});

connection.connect();
connection.query('SELECT 1+1 AS solution', function(error,rows,fields){
	// if (error) throw error;
	console.log("the solution is: ", rows[0].solution );
});

connection.end();