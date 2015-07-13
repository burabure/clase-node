var http = require('http');
var concat = require('concat-stream');

http.get(process.argv[2], function(res) {
  res.pipe(
    concat(function(data) {
      data = data.toString();
      console.log(data.length);
      console.log(data);
    })
  );
}).on('error', function(data){
  console.log(data);
});
