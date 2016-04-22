function sayMyName(nome, callback) {
  if (typeof nome === 'string') {
    return callback(null, nome);
  } else {
    return callback(new Error('O parâmetro passado não é uma String!'), null);
  }
}

sayMyName('Lucas', function(erro, resposta) {
  if (erro) console.log(erro);
  else console.log(resposta);
});

sayMyName(1, function(erro, resposta) {
  if (erro) console.log(erro);
  else console.log(resposta);
});
