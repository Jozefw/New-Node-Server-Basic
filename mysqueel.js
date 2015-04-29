var http = require('http'),
	mysql = require('mysql'),
	fs = require('fs');

	fs.readFile('log.txt', function(error,logData){
		if (error) throw error;
		var text = logData.toString(),
			results = {},
			lines =text.split('\n');

			lines.forEach(function(line){
				var parts = line.split(' '),
					letter = parts[1],
					count = parseInt(parts[2]);

			})

	});