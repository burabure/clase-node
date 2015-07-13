var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200);
  response.write("Hola mundo!");
  response.end();
}).listen(8080);
