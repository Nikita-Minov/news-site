import React from 'react';
import {useFormik} from 'formik';
import AddCommentForm from './AddCommentForm';

const AddCommentFormContainer = () => {
  const formik = useFormik({
    initialValues: {
      comment: '',
    },
    onSubmit: (values, {resetForm}) => {
      alert('Comment sended!');
    },
  });
  return (
    <AddCommentForm
      formik={formik}
    />
  );
};

export default AddCommentFormContainer;
