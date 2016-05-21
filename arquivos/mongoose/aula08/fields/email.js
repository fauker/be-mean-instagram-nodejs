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
