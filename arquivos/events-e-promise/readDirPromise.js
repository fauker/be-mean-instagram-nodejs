var fs = require('fs');

function readdir(path) {
  return new Promise(function(resolve, reject) {
    fs.readdir(path,function(err, res) {
      err ? reject(err) : resolve(res);
    });
  });
};

readdir('.').then(function(data) {
  console.log('Arquivos:', data);
}, function(error) {
  console.log('ERROR', error);
});
