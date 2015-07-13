var net = require('net');

net.createServer(function (socket) {
  var now = new Date();
  var month = ('0' + (now.getMonth()+1)).slice(-2);
  var date = `${now.getFullYear()}-${month}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`;
  socket.end(date + '\n');
}).listen(process.argv[2]);
