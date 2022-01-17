import React, {useEffect} from 'react';
import styled from 'styled-components';
import RegisterForm from '../components/Register/RegisterForm';
import {connect} from 'react-redux';
import {Navigate} from 'react-router-dom';

const Register = ({isAuth}) => {
  useEffect(() => {
    document.title = 'Регистрация';
  });
  return (isAuth? <Navigate to='/'/>:
    <RegisterWrapper>
      <RegisterTitle>
        РЕГИСТРАЦИЯ
      </RegisterTitle>
      <RegisterForm/>
    </RegisterWrapper>
  );
};

const RegisterWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RegisterTitle = styled.h1`
  font-size: 40px;
  font-weight: 400;
  font-family: Roboto;
  color: #212121;
  margin-bottom: 70px;
`;

const mstp = (state) => ({
  isAuth: state.usersReducer.isAuth,
});

const RegisterContainer = connect(mstp, {})(Register);

export default RegisterContainer;
