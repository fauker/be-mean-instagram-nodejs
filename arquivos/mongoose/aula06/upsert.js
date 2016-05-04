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

var query = {name: 'Nerdmon'};
var mod = {
  $setOnInsert: {
    name: 'Nerdmon',
    description: 'Pokemon mt nerd',
    type: 'fogo',
    attack: 49,
    defense: 50,
    height: 100
  }
};
var options = {upsert: true};

PokemonModel.update(query, mod, options, function(err, data) {
  if (err) return console.log(err);
  console.log('Pokemon Inserido com Upsert: ', data);
});
