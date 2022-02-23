import React from 'react';
import {Formik} from 'formik';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {login, getMe} from '../../redux/reducers/userReducer/userReducer';

const LoginForm = ({login, getMe}) => {
  return (
    <Formik
      initialValues={{username: '', password: ''}}
      onSubmit={async (values, {resetForm}) => {
        await login(values.username, values.password);
        await getMe();
        resetForm();
      }}
    >
      {({values, handleSubmit, handleChange}) => (
        <InputArea onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            name="username"
            placeholder="ИМЯ ПОЛЬЗОВАТЕЛЯ"
            onChange={handleChange}
            value={values.username}
          />
          <StyledInput
            type="text"
            name="password"
            placeholder="ПАРОЛЬ"
            onChange={handleChange}
            value={values.password}
          />
          <SubmitButton type="submit">
            ОТПРАВИТЬ
          </SubmitButton>
        </InputArea>
      )}
    </Formik>
  );
};

const LoginFormContainer = connect(null, {
  login,
  getMe,
})(LoginForm);

const InputArea = styled.form`
  width: 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const StyledInput = styled.input`
  display: flex;
  justify-content: end;
  outline: none;
  border: none;
  background-color: #F4F4F4;
  border-radius: 30px;
  padding: 20px 40px;
  margin-bottom: 60px;
`;
const SubmitButton = styled.button`
  outline: none;
  border: none;
  border-radius: 30px;
  background-color: #F4F4F4;
  padding: 15px 40px;
  &:hover {
    cursor: pointer;
  }
`;

export default LoginFormContainer;
