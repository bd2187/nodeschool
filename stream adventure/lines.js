var through = require('through2');
var split   = require('split');

var lowercase = false;

process.stdin
.pipe(split())
.pipe(through(function(buffer, extension, next){
  if (lowercase) {
    this.push(buffer.toString().toUpperCase() + '\n');
  }
  else {
    this.push(buffer.toString().toLowerCase() + '\n');
  }
  lowercase = !lowercase;
  next();
}))
.pipe(process.stdout);
