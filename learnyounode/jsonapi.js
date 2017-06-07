var http = require('http');
var url = require('url');

var port = process.argv[2] || 3000;

var server = http.createServer(function(req, res){
  var pathname  = url.parse(req.url).pathname;
  var parsedURL = url.parse(req.url, true);
  var time      = new Date(parsedURL.query.iso);
  var result;

  res.writeHead(200, { 'Content-Type': 'application/json' });

  if (pathname === '/api/parsetime') {
    result = parsetime(time);
    res.end( JSON.stringify(result) );
  } else if (pathname === '/api/unixtime') {
    result = unixtime(time);
    res.end( JSON.stringify(result) );
  }

}).listen(port);
console.log(`Listening to port: ${port}`);

function parsetime(time) {
  return {
    "hour": time.getHours(),
    "minute": time.getMinutes(),
    "second": time.getSeconds()
  }
}

function unixtime(time) {
  var unix = time.getTime();
  return {
    "unixtime": unix
  }
}
