const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/be-mean-instagram');
const Schema = mongoose.Schema;

const _schema = {
  name: String,
  description: String,
  type: String,
  attack: Number,
  defense: Number,
  height: Number
}

const PokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', PokemonSchema);

PokemonModel.findOneAndRemove({type: 'raio'}, (err, data) => {
  if (err) return console.log('err', err);
  console.log('data', data);
});
