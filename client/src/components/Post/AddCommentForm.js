import React from 'react';
import styled from 'styled-components';

const AddCommentForm = ({formik}) => {
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <PostNameInput
        id="comment"
        name="comment"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.comment}
      />
      <PostSendBtn type="submit">Отправить</PostSendBtn>
    </StyledForm>
  );
};
const StyledForm = styled.form`
  width: 700px;
  height: 50px;
  display: flex;
`;
const PostNameInput = styled.input`
  width: 70%;
  height: 100%;
  outline: none;
  border: none;
  background-color: #F4F4F4;
  border-radius: 30px 0 0 30px;
  margin-bottom: 30px;
`;

const PostSendBtn = styled.button`
  width: 30%;
  height: 100%;
  outline: none;
  border: none;
  border-radius: 0 30px 30px 0;
  background-color: #F4F4F4;
  &:hover {
    cursor: pointer;
  }
`;

export default AddCommentForm;
