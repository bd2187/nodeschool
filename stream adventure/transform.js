var through = require('through2');
var str = through(write, end);

function write(buffer, encoding, next){
  // produce output data. Convert each chunk into a string and uppercase all characters
  this.push(buffer.toString().toUpperCase());

  // ready to receive next chunk
  next();
}

function end(done) {
  done();
}

// pipe 'process.stdin' into str (transform stream)
// pipe str into 'process.stdout'
process.stdin.pipe(str).pipe(process.stdout);
