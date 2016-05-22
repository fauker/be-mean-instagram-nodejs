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

PokemonSchema.statics.findAndModify = function (query, sort, doc, options, callback) {
  return this.collection.findAndModify(query, sort, doc, options, callback);
};
const PokemonModel = mongoose.model('Pokemon', PokemonSchema);

PokemonModel.findAndModify({name: /pokemon número 2/i}, [], {descricao: 'Este é o segundo poke!!!'}, {}, (err, data) => {
  if (err) return console.log('ERRO:', err);
  console.log('DATA:', data);
});
