const _validate = (v) => v.length == 11;

const Field = {
  type: String,
  required: true,
  validate: [_validate, 'O CPF deve ter 11 dígitos!']
};

module.exports = Field;
