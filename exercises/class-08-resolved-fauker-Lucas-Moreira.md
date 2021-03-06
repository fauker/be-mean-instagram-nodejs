# Node.js - Aula 08 - Exercício

user: [fauker](http://github.com/fauker)

autor: LUCAS DA SILVA MOREIRA

## 1. Insira 5 pokemons novos, na coleção pokemons, escolha 3 e os adicione em um array e uma nova coleção chamada meus-pokemons, utilizando o ObjectId. Adicione o required em campos que ache obrigatório no Schema do Pokemon.

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
## 2. Crie um Schema de exemplo com validação para os campos (utilizar Arquitetura Atômica, ou seja cada campo sendo um Schema separado):

- email
```
const _validate = (v) => {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(v);
};

const _set = (v) => v.toLowerCase();

const Field = {
  type: String,
  required: true,
  set: _set,
  validate: [_validate, 'E-mail inválido!']
};

module.exports = Field;
```
- cpf
```
const _validate = (v) => v.length == 11;

const Field = {
  type: String,
  required: true,
  validate: [_validate, 'O CPF deve ter 11 dígitos!']
};

module.exports = Field;
```
- cnpj
```
const _validate = (v) => v.length == 14;

const Field = {
  type: String,
  required: true,
  validate: [_validate, 'O CNPJ deve ter 14 dígitos!']
};

module.exports = Field;
```
- url
```
const _validate = (v) => {
  return /^http|https|wwww/.test(v);
}

const _set = (v) => v.toLowerCase();

const Field = {
  type: String,
  set: _set,
  validate: [_validate, 'URL Inválida!'],
  required: true
}

module.exports = Field;
```
- ip
```
const _validate = (v) => {
  return /^(?:(?:2[0-4]\d|25[0-5]|1\d{2}|[1-9]?\d)\.){3}(?:2[0-4]\d|25[0-5]|1\d{2}|[1-9]?\d)(?:\:(?:\d|[1-9]\d{1,3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5]))?$/.test(v);
}

const Field = {
  type: String,
  required: true,
  validate: [_validate, 'IP inválido!']
}

module.exports = Field;
```

Utilizando o Schema:

```
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/be-mean-instagram');
const Schema = mongoose.Schema;

const _schema = {
  email: require('./fields/email'),
  cpf: require('./fields/cpf'),
  cnpj: require('./fields/cnpj'),
  url: require('./fields/url'),
  ip: require('./fields/ip')
}

const TesteSchema = new Schema(_schema);

const TesteModel = mongoose.model('Teste', TesteSchema);

const teste = {
  email: 'jose@gmail.com',
  cpf: '00000000000',
  cnpj: '00000000000000',
  url: 'http://webschool.io',
  ip: '192.168.1.100'
}

TesteModel.create(teste, (err, data) => {
  if (err) return console.log('ERROOOO:',err);
  return console.log('SALVOU!!!', data);
})
```

Resultado

```
node validations.js
SALVOU!!! { _id: 573fbcd04029bda5119dbcee,
  ip: '192.168.1.100',
  url: 'http://webschool.io',
  cnpj: '00000000000000',
  cpf: '00000000000',
  email: 'jose@gmail.com',
  __v: 0 }
```

## 3. Dê 3 exemplos diferentes, para cada, utilizando as funções:

- findAndModify

Primeiro Exemplo
```
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

PokemonModel.findAndModify({name: /nodemon/i}, [], {type: 'agua'}, {multi: true}, (err, data) => {
  if (err) return console.log('ERRO:', err);
  console.log('DATA:', data);
});
```
Resultado
```
DATA: { lastErrorObject: { updatedExisting: true, n: 1 },
  value:
   { _id: 572974fec3c044ae57196a34,
     name: 'NodeMon',
     description: 'Sinixtro',
     type: 'fogo',
     attack: 50,
     defense: 50,
     height: 20,
     __v: 0 },
  ok: 1 }

```
Segundo Exemplo:
```
PokemonModel.findAndModify({name: /pokemon número 4/i}, [], {attack: 100, descricao: 'Descricao muito bolada do poke de número 4'}, {}, (err, data) => {
  if (err) return console.log('ERRO:', err);
  console.log('DATA:', data);
});
```
Resultado:
```
DATA: { lastErrorObject: { updatedExisting: true, n: 1 },
  value:
   { _id: 573a88c30dde8b16f9e2bba3,
     name: 'Pokemon número 4',
     description: 'Descrição do poke de número 4',
     attack: '64',
     __v: 0 },
  ok: 1 }
```
Terceiro exemplo:
```
PokemonModel.findAndModify({name: /pokemon número 2/i}, [], {descricao: 'Este é o segundo poke!!!'}, {}, (err, data) => {
  if (err) return console.log('ERRO:', err);
  console.log('DATA:', data);
});
```
Resultado:
```
DATA: { lastErrorObject: { updatedExisting: true, n: 1 },
  value:
   { _id: 573a88c30dde8b16f9e2bba1,
     name: 'Pokemon número 2',
     description: 'Descrição do poke de número 2',
     attack: '62',
     __v: 0 },
  ok: 1 }
```
- findOneAndUpdate

Primeiro Exemplo:
```
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

PokemonModel.findOneAndUpdate({name: /pokemon número 3/i}, {attack: 1000}, {}, (err, data) => {
  if (err) return console.log('err', err);
  console.log('data', data);
});
```
Resultado:
```
data { __v: 0,
  attack: 63,
  description: 'Descrição do poke de número 3',
  name: 'Pokemon número 3',
  _id: 573a88c30dde8b16f9e2bba2 }
```
Segundo exemplo:
```
PokemonModel.findOneAndUpdate({type: 'agua'}, {type: 'raio'}, {}, (err, data) => {
  if (err) return console.log('err', err);
  console.log('data', data);
});
```
Resultado:
```
data { type: 'agua', _id: 572974fec3c044ae57196a34 }
```
Terceiro Exemplo:
```
PokemonModel.findOneAndUpdate({name: 'Pokemon número 3'}, {type: 'raio'}, {}, (err, data) => {
  if (err) return console.log('err', err);
  console.log('data', data);
});
```
Resultado:
```
data { __v: 0,
  attack: 1000,
  description: 'Descrição do poke de número 3',
  name: 'Pokemon número 3',
  _id: 573a88c30dde8b16f9e2bba2 }
```
- findOneAndRemove

Primeiro exemplo:
```
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

PokemonModel.findOneAndRemove({name: 'Pokemon número 3'}, (err, data) => {
  if (err) return console.log('err', err);
  console.log('data', data);
});
```
Resultado:
```
data { type: 'raio',
  __v: 0,
  attack: 1000,
  description: 'Descrição do poke de número 3',
  name: 'Pokemon número 3',
  _id: 573a88c30dde8b16f9e2bba2 }
```
Segundo exemplo:
```
PokemonModel.findOneAndRemove({name: 'Pokemon número 1'}, (err, data) => {
  if (err) return console.log('err', err);
  console.log('data', data);
});
```
Resultado
```
data { __v: 0,
  attack: 61,
  description: 'Descrição do poke de número 1',
  name: 'Pokemon número 1',
  _id: 573a88c30dde8b16f9e2bba0 }
```
Terceiro exemplo:
```
PokemonModel.findOneAndRemove({type: 'raio'}, (err, data) => {
  if (err) return console.log('err', err);
  console.log('data', data);
});
```
Resultado
```
{ type: 'raio', _id: 572974fec3c044ae57196a34 }
```
