import React, {useEffect} from 'react';
import styled from 'styled-components';
import LoginForm from '../components/Login/LoginForm';
import {connect} from 'react-redux';
import {Navigate} from 'react-router';

const Login = ({isAuth}) => {
  useEffect(() => {
    document.title = 'Авторизация';
  });
  return (isAuth? <Navigate to='/'/>:
    <LoginWrapper>
      <LoginTitle>
        АВТОРИЗАЦИЯ
      </LoginTitle>
      <LoginForm/>
    </LoginWrapper>
  );
};

const mstp = (state) => ({
  isAuth: state.usersReducer.isAuth,
});

const LoginContainer = connect(mstp, {})(Login);

const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginTitle = styled.h1`
  font-size: 40px;
  font-weight: 400;
  font-family: Roboto;
  color: #212121;
  margin-bottom: 70px;
`;

export default LoginContainer;
