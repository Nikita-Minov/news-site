import React from 'react';
import styled from 'styled-components';
import RegisterFormContainer
from '../components/Register/RegisterFormContainer';
import {Navigate} from 'react-router-dom';

const Register = ({isAuth}) => {
  return (isAuth? <Navigate to='/'/>:
    <RegisterWrapper>
      <RegisterTitle>
        РЕГИСТРАЦИЯ
      </RegisterTitle>
      <RegisterFormContainer/>
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

export default Register;
