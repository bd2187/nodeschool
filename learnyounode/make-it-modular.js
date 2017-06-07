var filteredLS = require('./filteredLS.js');

var directory = process.argv[2];
var fileExtension = process.argv[3];

function callback(err, arr) {
  if (err) {
    console.log(err);
  } else {
    arr.map((file) => {console.log(file)});
  }
}

filteredLS(directory, fileExtension, callback);
