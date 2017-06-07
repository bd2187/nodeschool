var http = require('http');
var fs = require('fs');

var port = Number(process.argv[2]);
var filePath = process.argv[3];

var server = http.createServer(function(req, res){
  var file = fs.createReadStream(filePath);
  file.pipe(res);
});

server.listen(port);
