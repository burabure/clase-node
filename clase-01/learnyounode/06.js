var filesWithFormat = require('./lib/filesWithFormat');

filesWithFormat(process.argv[2], process.argv[3], function(err, files){
  if (err) { console.log(err); }
  
  files
    .forEach(function(file){ console.log(file); });
});
