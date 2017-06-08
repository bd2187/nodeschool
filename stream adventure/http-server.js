var http = require('http');
var through = require('through2');

var port = process.argv[2] || 3000;

http.createServer(function (req, res){
  if (req.method === 'POST') {
    req.pipe(through(write, end)).pipe(res);
  }
  else {
    res.end('Please send a POST');
  }
}).listen(port);
console.log(`now listening to port: ${port}`);

function write(buff, _, next) {
  this.push(buff.toString().toUpperCase());
  next();
}

function end(done) {
  done();
}
