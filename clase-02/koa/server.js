var koa = require('koa');
var get = require('./lib/getPromise.js');
var app = koa();

// logger
app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});


/* Routes */
app.use(function *(){
  this.type = 'application/json';
  var userJson = JSON.parse( yield get('http://output.jsbin.com/cinuna/8.json'));

  var output = yield userJson.tweets
                      .map(function(url){ return get(url); });

  userJson.tweets
    .forEach(function(url, index){ userJson.tweets[index] = JSON.parse(output[index]); });

  this.body = userJson;
});

app.listen(3000);
