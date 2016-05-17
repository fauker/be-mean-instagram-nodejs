const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/be-mean-instagram');
const Schema = mongoose.Schema;
const _schema = {
  pokemons: [{type: Schema.Types.ObjectId, ref: 'pokemons'}]
};

const data = {
  pokemons: [
    '573a88c30dde8b16f9e2bba3',
    '573a88c30dde8b16f9e2bba1',
    '573a88c30dde8b16f9e2bba0'
  ]
};

const PokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('MeusPokemons', PokemonSchema);

PokemonModel.create(data, (err, data) => {
  if (err) return console.log(err);
  return console.log('Adicionando os IDS:', data);
});
