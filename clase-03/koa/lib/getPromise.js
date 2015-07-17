var http = require('http');
var concat = require('concat-stream');

module.exports = function(url) {
  return new Promise(function(resolve, reject) {
    http.get(url, function(res) {
      res.pipe(concat(function(data) {
        resolve(data.toString());
      }));
    }).on('error', function(err){
      reject(err);
    });
  });
}
