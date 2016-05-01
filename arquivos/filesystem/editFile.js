var fs = require('fs');

fs.readFile('file.txt', 'utf-8', function(err, data) {
  if (err) throw err;
  console.log('conteúdo antigo: ' + data);
  var novoConteudo = 'Novo conteúdo';
  fs.writeFileSync('file.txt', novoConteudo);
});
