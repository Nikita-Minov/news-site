import React, {useEffect} from 'react';
import Login from './Login';
import {useSelector} from 'react-redux';

const LoginContainer = ({}) => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  useEffect(() => {
    document.title = 'Авторизация';
  });
  return (
    <Login
      isAuth={isAuth}
    />
  );
};

export default LoginContainer;
