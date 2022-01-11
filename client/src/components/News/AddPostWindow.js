import React from 'react';
import styled from 'styled-components';
import cross from '../../img/cross.png';
import AddPostForm from './AddPostForm';

const AddPostFWindow = ({addPostStatusSet}) => {
  return (
    <ModalWindowWrapper>
      <ModalWindow>
        <ModalWindowBtnClose onClick={() => {
          addPostStatusSet(0);
        }}>
          <CrossImg src={cross} alt="cross" />
        </ModalWindowBtnClose>
        <AddPostForm addPostStatusSet={addPostStatusSet} />
      </ModalWindow>
    </ModalWindowWrapper>
  );
};

const ModalWindowWrapper = styled.div`
  position: fixed;
  width: 730px;
  height: 650px;
  background: #ffffff;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
  top: 20%;
  border: 3px solid #cccccc;
`;

const ModalWindow = styled.div`
  width: 620px;
  height: 470px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalWindowBtnClose = styled.button`
  position: absolute;
  bottom: 90%;
  left: 90%;
  border: none;
  background: inherit;
  cursor: pointer;
  width: 20px;
  height: 20px;
`;

const CrossImg = styled.img`
  transform: rotate(45deg);
`;

export default AddPostFWindow;
