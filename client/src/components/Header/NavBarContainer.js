import React from 'react';
import NavBar from './NavBar';
import {useSelector} from 'react-redux';

function NavBarContainer(props) {
  const headerMenuItems = [
    {name: 'Главная', url: '/'},
    {name: 'Категории', url: '/categories'},
  ];
  const authHeaderMenuItems = [
    {name: 'Личный кабинет', url: '/personal-area'},
  ];
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  return (
    <NavBar isAuth={isAuth}
      headerMenuItems={headerMenuItems}
      authHeaderMenuItems={authHeaderMenuItems}/>
  );
}

export default NavBarContainer;
