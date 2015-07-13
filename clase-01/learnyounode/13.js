var http = require('http');
var url = require('url');

http.createServer(function(request, response) {
  response.writeHead(200, { 'Content-Type': 'application/json' });

  var requestUrl = url.parse(request.url, true);
  var date = new Date(requestUrl.query.iso);

  switch (requestUrl.pathname) {
    case '/api/parsetime':
      var json = {
        "hour": date.getHours(),
        "minute": date.getMinutes(),
        "second": date.getSeconds() }
      break;

    case '/api/unixtime':
      var json = {
        "unixtime": date.getTime() }
      break;
  }

  response.end(JSON.stringify(json));

}).listen(process.argv[2]);
