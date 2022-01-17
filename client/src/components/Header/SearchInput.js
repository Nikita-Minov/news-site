import React from 'react';
import {Formik} from 'formik';
import searchMagnifier from '../../img/searchMagnifier.svg';
import styled from 'styled-components';

const SearchInput = () => {
  return (
    <Formik
      initialValues={{news: ''}}
      onSubmit={(values) => {
        alert('News if finded!');
      }}
    >
      {() => (
        <InputArea>
          <HeaderSearchInput
            type="text"
            name="news"
            placeholder="Найти новость..."
          />
          <SearchButton type="submit">
            <img src={searchMagnifier} alt="searchMagnifier"/>
          </SearchButton>
        </InputArea>
      )}
    </Formik>
  );
};

const InputArea = styled.form`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeaderSearchInput = styled.input`
  display: flex;
  justify-content: end;
  outline: none;
  border: none;
  background-color: #F4F4F4;
  border-radius: 30px 0 0 30px;
  padding: 14px 30px;
`;
const SearchButton = styled.button`
  outline: none;
  border: none;
  border-radius: 0 30px 30px 0;
  background-color: #F4F4F4;
  padding: 10px 30px;
  &:hover {
    cursor: pointer;
  }
`;

export default SearchInput;
