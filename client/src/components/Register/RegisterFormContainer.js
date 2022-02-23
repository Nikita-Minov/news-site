import React from 'react';
import RegisterForm from './RegisterForm';
import {createUser} from '../../redux/reducers/userReducer/userReducer';
import {useDispatch} from 'react-redux';

function RegisterFormContainer() {
  const dispatch = useDispatch();
  const newUser = (username, password) =>
    dispatch(createUser(username, password));
  return (
    <RegisterForm createUser={newUser} />
  );
}

export default RegisterFormContainer;
