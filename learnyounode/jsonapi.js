var http = require('http');
var url = require('url');

var port = process.argv[2] || 3000;

var server = http.createServer(function(req, res){

});

server.listen(port);
console.log(`Listening to port: ${port}`)
