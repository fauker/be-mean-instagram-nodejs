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
