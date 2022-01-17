import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const NavBar = ({isAuth}) => {
  const headerMenuItems = [
    {name: 'Главная', url: '/'},
    {name: 'Категории', url: '/categories'},
  ];
  const authHeaderMenuItems = [
    {name: 'Личный кабинет', url: '/personal-area'},
  ];
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

const mstp = (state) => ({
  isAuth: state.usersReducer.isAuth,
});

const NavBarContainer = connect(mstp, {})(NavBar);

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

export default NavBarContainer;
