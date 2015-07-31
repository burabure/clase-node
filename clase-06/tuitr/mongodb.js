var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {

  var kittySchema = mongoose.Schema({
    name: {type: String, unique: true},
    pedo: Boolean
  });

  kittySchema.methods.speak = function () {
    var greeting = this.name
      ? 'Meow name is ' + this.name
      : 'I don\'t have a name';
    console.log(greeting);
  };

  var Kitten = mongoose.model('Kitten', kittySchema);

  var pepito = new Kitten({ name: 'sanson', pedo: true });

  console.log(pepito.speak());

  pepito.save(function(err, docs) {
    if (err) { console.error(err); }
    console.log(docs);
  });

  Kitten.find({}, function(err, docs) {
    if (err) { console.error(err); }
    console.log(docs);
  });

});
