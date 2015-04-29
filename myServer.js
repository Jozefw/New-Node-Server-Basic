// must create a public file in your node express folder

var express = require('express'),
app = express();

app.use(express.static(__dirname + '/public'));

app.listen(8080);

// make a package.jason file to load multiple dependencies in express
// package.json
// {
// 	"name": myServer,
// 	"version": "0.0.1",
// 	"dependencies": {
// 	"express" : "3.3"
// 	}
// }