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
var dataModel = [{
  name: 'LucasMon',
  description: 'Um pokemon muito bolado',
  type: 'fogo',
  attack: 100,
  defense: 50,
  height: 1
}, {
  name: 'AmigoMon',
  description: 'Um brother',
  type: 'agua',
  attack: 200,
  defense: 10,
  height: 0.4
}, {
  name: 'NodeMon',
  description: 'Sinixtro',
  type: 'fogo',
  attack: 50,
  defense: 50,
  height: 20
}];

PokemonModel.create(dataModel, function(err, data) {
  if (err) return console.log(err);
  console.log('Pokemons Inseridos: ', data);
});
