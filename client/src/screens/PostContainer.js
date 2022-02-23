import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getPost} from '../redux/reducers/postReducer/postReducer';
import Post from './Post';

const PostContainer = ({}) => {
  const post = useSelector((state) => state.postReducer.currentPost);
  const {postId} = useParams();
  const dispatch = useDispatch();
  const dispatchGetPost = (postId) => dispatch(getPost(postId));
  useEffect(() => {
    dispatchGetPost(postId);
  }, []);
  return (
    <Post
      post={post}
    />
  );
};

export default PostContainer;
