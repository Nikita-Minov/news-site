import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const NavBar = () => {
  const headerMenuItems = [
    {name: 'Главная', url: '/'},
    {name: 'Категории', url: '/categories'},
    {name: 'Контакты', url: '/contacts'},
  ];
  return (
    <HeaderMenu>
      {headerMenuItems.map((item, key) => {
        return <StyledLink to={item.url} key={key}>{item.name}</StyledLink>;
      })}
    </HeaderMenu>
  );
};

const HeaderMenu = styled.nav`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  font-size: 24px;
  text-decoration: none;
  font-family: Roboto;
  color: #212121;
`;

export default NavBar;
