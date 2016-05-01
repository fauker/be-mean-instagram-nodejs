var fs = require('fs');

fs.unlink('fileAlterado.txt', function(err) {
  if (err) throw err;
  console.log('Sucesso ao remover o arquivo fileAlterado.txt');
});
