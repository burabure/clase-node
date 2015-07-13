var http = require('http');
var co = require('co');
var concat = require('concat-stream');

function get(url) {
  return new Promise(function(resolve, reject){
    http.get(url, function(res) {
      res.setEncoding('utf8');
      res.pipe(concat(function(data) {
        resolve(data);
      }));
    }).on('error', function(err){
      reject(err);
    });
  });
}


co(function* () {
  var results = yield process.argv
                        .slice(2)
                        .map(function(url) { return get(url); });

  results
    .forEach(function(body){ console.log(body); });
});
