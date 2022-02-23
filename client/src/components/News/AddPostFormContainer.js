import React from 'react';
import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {
  createPost,
  getPosts,
} from '../../redux/reducers/postReducer/postReducer';
import AddPostForm from './AddPostForm';

const AddPostFormContainer = ({addPostStatusSet}) => {
  const creatorId = useSelector((state) => state.userReducer.userInfo.userId);
  const dispatch = useDispatch();
  const dispatchCreatePost = (postName, postText, creatorId) => {
    dispatch(createPost(postName, postText, creatorId));
  };
  const dispatchGetPosts = () => {
    dispatch(getPosts());
  };
  const formik = useFormik({
    initialValues: {
      postName: '',
      postText: '',
    },
    onSubmit: (values, {resetForm}) => {
      dispatchCreatePost(values.postName, values.postText, creatorId);
      resetForm();
      dispatchGetPosts();
      addPostStatusSet(0);
    },
  });
  return (
    <AddPostForm
      formik={formik}
    />
  );
};

export default AddPostFormContainer;
