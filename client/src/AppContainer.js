import React, {useEffect} from 'react';
import {getPosts} from './redux/reducers/postReducer/postReducer';
import {getMe} from './redux/reducers/userReducer/userReducer';
import App from './App';
import {useDispatch} from 'react-redux';
/* eslint-disable require-jsdoc */
function AppContainer({}) {
  const dispatch = useDispatch();
  const dispatchGetPosts = () => dispatch(getPosts());
  const dispatchGetMe = () => dispatch(getMe());
  useEffect(() => {
    dispatchGetPosts();
  }, []);
  useEffect(() => {
    dispatchGetMe();
  }, []);
  return (
    <App/>
  );
}
export default AppContainer;
