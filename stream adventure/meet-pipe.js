var fs = require('fs');
var file = process.argv[2];

var readStream = fs.createReadStream(file);

// pipe 'read stream' to node console
readStream.pipe(process.stdout);
