import React from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput';
import NavBarContainer from './NavBarContainer';
import ProfileMenuContainer from './ProfileMenuContainer';
const Header = () => {
  return (
    <HeaderWrapper>
      <NavBarContainer/>
      <SearchInput />
      <ProfileMenuContainer />
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
