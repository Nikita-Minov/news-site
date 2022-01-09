import React, {useEffect} from 'react';
import styled from 'styled-components';
import LoginForm from '../components/Login/LoginForm';

const Login = () => {
  useEffect(() => {
    document.title = 'Login';
  });
  return (
    <LoginWrapper>
      <LoginTitle>
        LOGIN
      </LoginTitle>
      <LoginForm/>
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
