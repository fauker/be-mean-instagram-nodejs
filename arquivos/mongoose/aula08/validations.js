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
