var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/be-mean-instagram', function() {
  console.log('MongoDB conectado!');
});
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
var Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;
