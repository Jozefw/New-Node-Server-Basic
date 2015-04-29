var http = require('http'),
	mysql = require('mysql'),
	fs = require('fs');

	fs.readFile('log.txt', function(error,logData){
		if (error) throw error;
		var text = logData.toString(),
			results = {},
			lines = text.split('\n');
			console.log("this is lines " + lines);

// this is like ruby's for each
			lines.forEach(function(line){
				var parts = line.split(' ');
				console.log("this is parts " + parts);
				var letter = parts[1];
				console.log("this is letter " + letter);
				var count = parseInt(parts[2], 10);

				if ( !results[letter] ) {
					results[letter] = 0;
				}
				results[letter] = results[letter] + parseInt(count,10);

			});
			console.log(results);

	});