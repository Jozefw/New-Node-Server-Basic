var http = require('http'),
	mysql = require('mysql'),
	fs = require('fs');

	fs.readFile('log.txt', function(error,logData){
		if (error) throw error;
		var text = logData.toString();
	});