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
