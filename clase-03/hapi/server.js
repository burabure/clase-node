var path = require('path');
var Hapi = require('hapi');
var Joi = require('joi');

/* SERVER CONFIG */
var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8000
});

server.views({
  engines: {
    html: require('handlebars')
  },
  path: path.join(__dirname, 'views')
});


/* ROUTES */
server.route({
  method: 'GET',
  path:'/hello',
  handler: function (request, reply) {
    reply({hello: 'world'});
  }
});


server.route({
  method: 'GET',
  path: '/hello/{name}',
  handler: function (request, reply) {
    reply({hello: request.params.name});
  }
});


server.route({
  method: ['PUT', 'POST'],
  path: '/hello',
  handler: function (request, reply) {
    reply({hello: request.query.name});
  },
  config: {
    validate: {
      query: {
        name: Joi.string().min(3).max(10)
      }
    }
  }
});


server.route({
  method: 'GET',
  path: '/home',
  handler: {
    view: {
      template: 'index',
      context: {
        title: 'Mai 1337 h0m3 p4g3',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper tincidunt malesuada.
        Duis massa libero, vulputate sed ipsum quis, cursus ornare est. Proin blandit aliquet massa,
        at commodo ligula cursus vel. Proin pharetra risus vitae bibendum laoreet. Phasellus porta ullamcorper semper.
        Duis odio risus, finibus a fringilla imperdiet, commodo at enim.`
      }
    }
  }
});


// Start the server
server.start(function() {
  console.log('Server running at:', server.info.uri);
});
