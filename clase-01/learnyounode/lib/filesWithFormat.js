var fs = require('fs');
var path = require('path');

module.exports = function(dirPath, format, callback) {
  fs.readdir(dirPath, function (err, data) {
    if (err) { return callback(err); }

    var filesWithFormat =
      data
        .filter(function(file){ return path.extname(file) === ('.' + format); });

    callback(null, filesWithFormat);
  });
};
