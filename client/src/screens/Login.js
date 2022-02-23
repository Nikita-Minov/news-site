import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Navigate} from 'react-router';
import LoginFormContainer from '../components/Login/LoginFormContainer';

const Login = ({isAuth}) => {
  useEffect(() => {
    document.title = 'Авторизация';
  });
  return (isAuth? <Navigate to='/'/>:
    <LoginWrapper>
      <LoginTitle>
        АВТОРИЗАЦИЯ
      </LoginTitle>
      <LoginFormContainer/>
    </LoginWrapper>
  );
};

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

export default Login;
