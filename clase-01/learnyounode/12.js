var http = require('http');
var _ = require('highland');

http.createServer(function(request, response) {
  if (request.method != 'POST') { return res.end('send me a POST\n'); }
  response.writeHead(200, { 'content-type': 'text/plain' });

  _(request)
    .map(function(data) { return data.toString().toUpperCase(); })
    .pipe(response);

}).listen(process.argv[2]);
