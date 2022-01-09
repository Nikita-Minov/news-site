import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../redux/usersReducer';

const ProfileBar = ({isAuth, username, logout}) => {
  /* eslint react/prop-types: 0 */
  const authorizedLinks = [
    {name: username, url: '/profile', func: 0},
    {name: 'Закладки', url: '/bookmarks', func: 0},
    {name: 'Выход', url: '/logout', func: logout},
  ];
  const noAuthorizedLinks = [
    {name: 'Войти', url: '/login', func: 0},
    {name: 'Регистрация', url: '/register', func: 0},
  ];
  return (
    <ProfileBarWrapper>
      <ProfileBarMenu>
        {
          isAuth?(authorizedLinks.map((el, id) => {
            return (
              <ProfileBarMenuItem key={id}>
                <StyledLink to={el.url} onClick={el.func}>
                  {el.name}
                </StyledLink>
              </ProfileBarMenuItem>
            );
          })):
          (noAuthorizedLinks.map((el, id) => {
            return (
              <ProfileBarMenuItem key={id}>
                <StyledLink to={el.url}>
                  {el.name}
                </StyledLink>
              </ProfileBarMenuItem>
            );
          }))
        }
      </ProfileBarMenu>
    </ProfileBarWrapper>
  );
};

const mstp = (state) => ({
  isAuth: state.usersReducer.isAuth,
  username: state.usersReducer.userInfo.username,
});

const ProfileBarContainer = connect(mstp, {
  logout,
})(ProfileBar);

const ProfileBarWrapper = styled.div`
  width: 150px;
  height: 200px;
  margin: auto;
  background-color: #F4F4F4;
  position: absolute;
  top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: 3px solid #000000;
`;

const ProfileBarMenu = styled.ul`
  padding: 0;
  width: 80%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ProfileBarMenuItem = styled.li`
  width: 100%;
  list-style-type: none;
  display: flex;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  width: 100%;
  text-decoration: none;
  font-size: 20px;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  color: #000000;
`;

export default ProfileBarContainer;
