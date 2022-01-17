import React from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput';
import NavBar from './NavBar';
import ProfileMenu from './ProfileMenu';
const Header = () => {
  return (
    <HeaderWrapper>
      <NavBar/>
      <SearchInput />
      <ProfileMenu />
    </HeaderWrapper>
  );
};
const HeaderWrapper = styled.header`
  width: 70%;
  height: 60px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;


export default Header;
