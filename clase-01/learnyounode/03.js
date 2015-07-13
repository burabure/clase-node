var fs = require('fs');

console.log("Trabajando!");

var myFileNewlineCount =
  fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .length - 1;

console.log("terminado!");

console.log(myFileNewlineCount);
