import React from 'react';
import AddPostWindow from './AddPostWindow';

const AddPostWindowContainer = ({addPostStatusSet}) => {
  const addPostStatusUpdate = () => {
    addPostStatusSet(0);
  };
  return (
    <AddPostWindow
      addPostStatusSet={addPostStatusUpdate}
    />
  );
};

export default AddPostWindowContainer;
