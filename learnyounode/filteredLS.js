var fs = require('fs');
var path = require('path');

module.exports = function(dirName, ext, cb) {
  fs.readdir(dirName, function(err, list){
    if (err) {
      return cb(err);
    } else {
      var filtered = list.filter(function(file){
        return path.extname(file).replace(/\./g, "") === ext;
      });
      cb(null, filtered);
    }
  });
}
