import React from 'react';
import {useFormik} from 'formik';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {
  createPost,
  getPosts,
} from '../../redux/reducers/postReducer/postReducer';

const AddPostForm = ({createPost, creatorId, addPostStatusSet, getPosts}) => {
  const formik = useFormik({
    initialValues: {
      postName: '',
      postText: '',
    },
    onSubmit: async (values, {resetForm}) => {
      await createPost(values.postName, values.postText, creatorId);
      resetForm();
      await getPosts();
      addPostStatusSet(0);
    },
  });
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <InputLabel htmlFor="postName">Название</InputLabel>
      <PostNameInput
        id="postName"
        name="postName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.postName}
      />

      <InputLabel htmlFor="lastName">Содержимое</InputLabel>
      <PostTextArea
        id="postText"
        name="postText"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.postText}
      />

      <PostSendBtn type="submit">Отправить</PostSendBtn>
    </StyledForm>
  );
};

const mstp = (state) => ({
  creatorId: state.userReducer.userInfo.userId,
});

const AddPostFormContainer = connect(mstp, {
  createPost,
  getPosts,
})(AddPostForm);

const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
`;

const PostNameInput = styled.input`
  outline: none;
  border: none;
  background-color: #F4F4F4;
  border-radius: 30px;
  padding: 14px 30px;
  margin-bottom: 30px;
`;

const PostTextArea = styled.textarea`
  height: 400px;
  outline: none;
  border: none;
  background-color: #F4F4F4;
  border-radius: 30px;
  padding: 14px 30px;
  margin-bottom: 30px;
`;

const PostSendBtn = styled.button`
  outline: none;
  border: none;
  border-radius: 0 30px 30px 0;
  background-color: #F4F4F4;
  padding: 10px 30px;
  font-size: 18px;
  &:hover {
    cursor: pointer;
  }
`;

export default AddPostFormContainer;
