import React, {useEffect} from 'react';
import styled from 'styled-components';
import RegisterForm from '../components/Register/RegisterForm';

const Register = () => {
  useEffect(() => {
    document.title = 'Registration';
  });
  return (
    <RegisterWrapper>
      <RegisterTitle>
        REGISTRATION
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

export default Register;
