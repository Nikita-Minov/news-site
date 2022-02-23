import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../redux/reducers/userReducer/userReducer';
import ProfileBar from './ProfileBar';

const ProfileBarContainer = ({}) => {
  const dispatch = useDispatch();
  const logOut = () => dispatch(logout());
  const [isAuth, username] = useSelector((state) => {
    return [state.userReducer.isAuth, state.userReducer.userInfo.username];
  });
  /* eslint react/prop-types: 0 */
  const authorizedLinks = [
    {name: username, url: '/profile', func: 0},
    {name: 'Закладки', url: '/bookmarks', func: 0},
    {name: 'Выход', url: '/', func: logOut},
  ];
  const noAuthorizedLinks = [
    {name: 'Войти', url: '/login', func: 0},
    {name: 'Регистрация', url: '/register', func: 0},
  ];
  return (
    <ProfileBar
      isAuth={isAuth}
      authorizedLinks={authorizedLinks}
      noAuthorizedLinks={noAuthorizedLinks}/>
  );
};

export default ProfileBarContainer;
