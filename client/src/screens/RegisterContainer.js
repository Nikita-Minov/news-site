import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import Register from './Register';

const RegisterContainer = ({}) => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  useEffect(() => {
    document.title = 'Регистрация';
  });
  return (
    <Register
      isAuth={isAuth}
    />
  );
};

export default RegisterContainer;
