import React from 'react';
import {Formik} from 'formik';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {createUser} from '../../redux/usersReducer';
import validator from '../../utils/validator';

const RegisterForm = ({createUser}) => {
  return (
    <Formik
      initialValues={{username: '', password: ''}}
      onSubmit={(values, {resetForm}) => {
        createUser(values.username, values.password);
        resetForm();
      }}
      validate={validator.registerValidator}
    >
      {({values, handleSubmit, handleChange, errors, touched}) => (
        <InputArea onSubmit={handleSubmit}>
          <StyledLabel htmlFor='username'>{errors.username}</StyledLabel>
          <StyledInput
            type="text"
            name="username"
            placeholder="USERNAME"
            id="username"
            onChange={handleChange}
            value={values.username}
          />
          <StyledLabel htmlFor='password'>{errors.password}</StyledLabel>
          <StyledInput
            type="text"
            name="password"
            placeholder="PASSWORD"
            id="password"
            onChange={handleChange}
            value={values.password}
          />
          {errors.username || errors.password?
          (<SubmitButton type="submit" disabled>
            SUBMIT
          </SubmitButton>):
          (<SubmitButton type="submit">
          SUBMIT
          </SubmitButton>)}
        </InputArea>
      )}
    </Formik>
  );
};

const RegisterFormContainer = connect(null, {
  createUser,
})(RegisterForm);

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

const StyledLabel = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  color: red;
  left: 100px;
`;

export default RegisterFormContainer;
