var express = require('express');
var path = require('path');
var http = require('http');
var concat = require('concat-stream');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

/* Routes */
app.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Mai 1337 h0m3 p4g3',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper tincidunt malesuada.
    Duis massa libero, vulputate sed ipsum quis, cursus ornare est. Proin blandit aliquet massa,
    at commodo ligula cursus vel. Proin pharetra risus vitae bibendum laoreet. Phasellus porta ullamcorper semper.
    Duis odio risus, finibus a fringilla imperdiet, commodo at enim.`
  });
});


app.get('/async', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');

  http.get('http://output.jsbin.com/cinuna/8.json', function(getRes) {
    getRes.pipe(
      concat(function(data) {
        var json = JSON.parse(data.toString());

        http.get(json.tweets[0], function(getRes2) {
          getRes2.pipe(
            concat(function(data) {
              json.tweets[0] = JSON.parse(data.toString());

              http.get(json.tweets[1], function(getRes3) {
                getRes3.pipe(
                  concat(function(data) {
                    json.tweets[1] = JSON.parse(data.toString())
                    res.send(JSON.stringify(json)); // <- aqui esta lo importante de nuestro codigo
                  })
                );
              }).on('error', function(err){
                console.log(err);
              });
            })
          );
        }).on('error', function(err){
          console.log(err);
        });
      })
    );
  }).on('error', function(err){
    console.log(err);
  });

});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
