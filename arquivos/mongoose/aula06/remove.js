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
var query = {attack: {$gt: 50}};

PokemonModel.remove(query, function(err, data) {
  if (err) return console.log(err);
  console.log('Pokemon Excluídos: ', data);
});
