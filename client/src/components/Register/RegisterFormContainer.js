import React from 'react';
import RegisterForm from './RegisterForm';
import {createUser} from '../../redux/reducers/userReducer/userReducer';
import {useDispatch} from 'react-redux';
import {useFormik} from 'formik';
import validator from '../../utils/validator';

function RegisterFormContainer() {
  const dispatch = useDispatch();
  const dispatchCreateUser = (username, password) =>
    dispatch(createUser(username, password));
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values, {resetForm}) => {
      dispatchCreateUser(values.username, values.password);
      resetForm();
    },
    validate: validator.registerValidator,
  });
  return (
    <RegisterForm
      formik={formik}
    />
  );
}

export default RegisterFormContainer;
