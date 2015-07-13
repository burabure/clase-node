var http = require('http');

http.get(process.argv[2], function(res) {
  var result = '';

    res.on('data', function(data){
      result += data.toString();
    });

    res.on('end', function(){
      console.log(result.length);
      console.log(result);
    });

  }).on('error', function(data){
    console.log(data);
  });
