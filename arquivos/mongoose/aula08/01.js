'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/be-mean-instagram');
const Schema = mongoose.Schema;

const _schema = {
  name: {type: String, required: true},
  description: {type: String, required: true},
  attack: {type: String, required: true}
};

const PokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', PokemonSchema);

const data = [];

for (let i = 0; i < 5; i++) {
  let poke = {
    name: 'Pokemon número ' + i,
    description: 'Descrição do poke de número ' + i,
    attack: 60 + i
  }
  data.push(poke);
}

PokemonModel.create(data, (err, data) => {
  if (err) return console.log(err);
  console.log('GRAVOU:', data);
});

