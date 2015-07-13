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

get(process.argv[2])
  .then(function(body){
    console.log(body);
    return get(process.argv[3]);
  })
  .then(function(body){
    console.log(body);
    return get(process.argv[4]);
  })
  .then(function(body){
    console.log(body);
  })
  .catch(function(err){ console.log(err); });
