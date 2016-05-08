var mongoose = require('mongoose');
var Pokemon = require('./pokemon');

var promise = Pokemon.find({name: /nerdmon/i}).exec();
promise.then(function(data) {
  console.log(data);
}, function(error) {
  console.log(data);
});
