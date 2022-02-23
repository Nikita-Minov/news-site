import React from 'react';
import {useDispatch} from 'react-redux';
import {login, getMe} from '../../redux/reducers/userReducer/userReducer';
import LoginForm from './LoginForm';
import {useFormik} from 'formik';

const LoginFormContainer = ({}) => {
  const dispatch = useDispatch();
  const dispatchLogin = (username, password) => {
    dispatch(login(username, password));
  };
  const dispatchGetMe = () => {
    dispatch(getMe());
  };
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values, {resetForm}) => {
      dispatchLogin(values.username, values.password);
      resetForm();
      dispatchGetMe();
    },
  });
  return (
    <LoginForm
      formik={formik}
    />
  );
};

export default LoginFormContainer;
