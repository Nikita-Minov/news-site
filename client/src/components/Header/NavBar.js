import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const NavBar = ({isAuth, headerMenuItems, authHeaderMenuItems}) => {
  return (
    <HeaderMenu>
      {headerMenuItems.map((item, key) => {
        return <StyledLink to={item.url} key={key}>{item.name}</StyledLink>;
      })}
      {isAuth? authHeaderMenuItems.map((item, key) => {
        return <StyledLink to={item.url} key={key}>{item.name}</StyledLink>;
      }):<></>}
    </HeaderMenu>
  );
};

const HeaderMenu = styled.nav`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const StyledLink = styled(Link)`
  font-size: 24px;
  text-decoration: none;
  font-family: Roboto;
  color: #212121;
  margin-right: 60px;
`;

export default NavBar;
