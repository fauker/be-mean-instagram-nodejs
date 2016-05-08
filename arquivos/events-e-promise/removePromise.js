var mongoose = require('mongoose');
var Pokemon = require('./pokemon');

var promise = Pokemon.remove({_id: "57297a013b4cb9a31a868f50"}).exec();
promise.then(function(data) {
  console.log(data);
}, function(error) {
  console.log(data);
});
