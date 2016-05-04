# Node.js - Aula 06 - Exercício

**user:** [fauker](http://github.com/fauker)

**autor:** LUCAS DA SILVA MOREIRA


## Crie um Schema com cada tipo explicado, inserindo tanto um objeto correto, como um objeto que desencadeie erros de validação padrão, criar especificamente:

* 1.1. para String: `enum`, `match`, `maxlength` e `minlength`

* 1.2.  para Number: `max` e `min`

**Objeto com erros de validação**:

```
require('./config');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _schema = {
  nome: {type: String, minlength: 5},
  sobrenome: {type: String, maxlength: 5},
  tecnologias: {type: String, enum: ['Node.js', 'MongoDB', 'Express', 'Angular.js']},
  telefone: {type: String, match: /^[1-9]/},
  idade: {type: Number, max: 2},
  amigos: {type: Number, min: 5}
};

var pessoaSchema = new Schema(_schema);
var PessoaModel = mongoose.model('Pessoa', pessoaSchema);
var dataModel = {
  nome: 'José',
  sobrenome: 'Moreira',
  tecnologias: 'php',
  telefone: 'a3333-3333',
  idade: 10,
  amigos: 2
};

var Jose = new PessoaModel(dataModel);
Jose.save(function(err, data) {
  if (err) return console.log('DEU PAU: ' + err);
  return console.log('Salvou a pessoa: ' + data);
});

//resultado
DEU PAU: ValidationError: Path `amigos` (2) is less than minimum allowed value (5)., Path `idade` (10) is more than maximum allowed value (2)., Path `telefone` is invalid (a3333-3333)., `php` is not a valid enum value for path `tecnologias`., Path `sobrenome` (`Moreira`) is longer than the maximum allowed length (5)., Path `nome` (`José`) is shorter than the minimum allowed length (5).
```

**Inserindo um objeto correto**:

```
require('./config');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _schema = {
  nome: {type: String, minlength: 5},
  sobrenome: {type: String, maxlength: 5},
  tecnologias: {type: String, enum: ['Node.js', 'MongoDB', 'Express', 'Angular.js']},
  telefone: {type: String, match: /^[1-9]/},
  idade: {type: Number, max: 2},
  amigos: {type: Number, min: 5}
};

var pessoaSchema = new Schema(_schema);
var PessoaModel = mongoose.model('Pessoa', pessoaSchema);
var dataModel = {
  nome: 'Francisco',
  sobrenome: 'Silva',
  tecnologias: 'Node.js',
  telefone: '3333-3333',
  idade: 1,
  amigos: 6
};

var Jose = new PessoaModel(dataModel);
Jose.save(function(err, data) {
  if (err) return console.log('DEU PAU: ' + err);
  return console.log('Salvou a pessoa: ' + data);
});

//resultado
Salvou a pessoa: { _id: 5729623d0c29593454bd65f7,
  amigos: 6,
  idade: 1,
  telefone: '3333-3333',
  tecnologias: 'Node.js',
  sobrenome: 'Silva',
  nome: 'Francisco',
  __v: 0 }
```

## Cadastre 3 pokemons **de uma só vez**:

## Busque **todos** os Pokemons com `attack > 50` e `height > 0.5`:

## Altere, **inserindo**, o Pokemon `Nerdmon` com `attack` igual a 49 e com os valores dos outros campos a sua escolha.

## Remova **todos** os Pokemons com `attack` **acima de 50**.
