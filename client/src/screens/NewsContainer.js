import React, {useEffect, useState} from 'react';
import {getPosts} from '../redux/reducers/postReducer/postReducer';
import {getMe} from '../redux/reducers/userReducer/userReducer';
import {useDispatch, useSelector} from 'react-redux';
import News from './News';
const NewsContainer = ({}) => {
  const [isAuth, posts] = useSelector((state) => {
    return [state.userReducer.isAuth, state.postReducer.posts];
  });
  const [addPostStatus, addPostStatusSet] = useState(0);
  const dispatch = useDispatch();
  const dispatchGetPosts = () => dispatch(getPosts());
  const dispatchGetMe = () => dispatch(getMe());
  useEffect(() => {
    dispatchGetPosts();
  }, []);
  useEffect(() => {
    dispatchGetMe();
  }, []);
  useEffect(() => {
    document.title = 'Новости';
  });
  return (
    <News
      isAuth={isAuth}
      posts={posts}
      addPostStatusSet={addPostStatusSet}
      addPostStatus={addPostStatus}
    />
  );
};

export default NewsContainer;
