# Node.js - Aula 08 - Exercício

user: [fauker](http://github.com/fauker)
autor: LUCAS DA SILVA MOREIRA

1. Insira 5 pokemons novos, na coleção pokemons, escolha 3 e os adicione em um array e uma nova coleção chamada meus-pokemons, utilizando o ObjectId. Adicione o required em campos que ache obrigatório no Schema do Pokemon.

```
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


---------------------------------

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

node 01-1.js
Adicionando os IDS: { pokemons:
   [ 573a88c30dde8b16f9e2bba3,
     573a88c30dde8b16f9e2bba1,
     573a88c30dde8b16f9e2bba0 ],
  _id: 573a8aebcc342858fca90b87,
  __v: 0 }
```
2. Crie um Schema de exemplo com validação para os campos (utilizar Arquitetura Atômica, ou seja cada campo sendo um Schema separado):

- email
- cpf
- cnpj
- url
- ip

3. Dê 3 exemplos diferentes, para cada, utilizando as funções:

- findAndModify
- findOneAndUpdate
- findOneAndRemove
