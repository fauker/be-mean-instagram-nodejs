const _validate = (v) => v.length == 14;

const Field = {
  type: String,
  required: true,
  validate: [_validate, 'O CNPJ deve ter 14 dígitos!']
};

module.exports = Field;
