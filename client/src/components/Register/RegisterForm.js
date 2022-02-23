import React from 'react';
import styled from 'styled-components';

const RegisterForm = ({formik}) => {
  return (
    <InputArea onSubmit={formik.handleSubmit}>
      <StyledLabel htmlFor='username'>{formik.errors.username}</StyledLabel>
      <StyledInput
        type="text"
        name="username"
        placeholder="ИМЯ ПОЛЬЗОВАТЕЛЯ"
        id="username"
        onChange={formik.handleChange}
        value={formik.values.username}
      />
      <StyledLabel htmlFor='password'>{formik.errors.password}</StyledLabel>
      <StyledInput
        type="text"
        name="password"
        placeholder="ПАРОЛЬ"
        id="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.errors.username || formik.errors.password?
      (<SubmitButton type="submit" disabled>
        ОТПРАВИТЬ
      </SubmitButton>):
      (<SubmitButton type="submit">
      ОТПРАВИТЬ
      </SubmitButton>)}
    </InputArea>
  );
};


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

export default RegisterForm;
