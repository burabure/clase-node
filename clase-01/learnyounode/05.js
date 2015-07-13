var fs = require('fs');
var path = require('path');

function listFilesWithFormat(dirPath, format) {
  fs.readdir(dirPath, function (err, data) {
    if (err) { throw err; }

    data
      .filter(function(file){ return path.extname(file) === ('.' + format); })
      .forEach(function(file){ console.log(file); });
  });
}

listFilesWithFormat(process.argv[2], process.argv[3]);
