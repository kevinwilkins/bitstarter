var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//Old response
//  response.send('Hello World2!');

//New response
var buffer = new buffer(fs.readFileSync("index.html"), 'utf-8');

response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
