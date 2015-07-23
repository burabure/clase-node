var http = require('http');
var concat = require('concat-stream');

export default function get(url) {
  return new Promise(function(resolve, reject){
    http.get(url, function(res) {
      res.setEncoding('utf8');
      res.pipe(concat(function(data) {
        resolve({body: data});
      }));
    }).on('error', function(err){
      reject(err);
    });
  });
}
