class Validator {
  registerValidator(values, props) {
    const errors = {};
    if (!values.username) {
      errors.username = 'Required';
    } else if (values.username.length > 32 || values.username.length < 8) {
      errors.username = 'Username must be more than 8 ' +
      'and less than 32 characters';
    }

    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length > 32 || values.password.length < 8) {
      errors.password = 'Password must be more than 8 ' +
      'and less than 32 characters';
    }
    return errors;
  }
}

export default new Validator();
