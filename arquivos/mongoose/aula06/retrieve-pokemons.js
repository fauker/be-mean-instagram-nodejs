require('./config');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _schema = {
  name:  String,
  description: String,
  type:   String,
  attack:   Number,
  defense:   Number,
  height:   Number
};

var pokemonSchema = new Schema(_schema);
var PokemonModel = mongoose.model('Pokemon', pokemonSchema);
var query = {$and: [{attack: {$gt: 50}}, {height: {$gt: 0.5}}]};

PokemonModel.find(query, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Buscou:', data);
});
