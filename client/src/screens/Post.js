import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {getPost} from '../redux/postsReducer';
import {Link} from 'react-router-dom';
import AddCommentForm from '../components/Post/AddCommentForm';

const Post = ({getPost, post}) => {
  const {postId} = useParams();
  useEffect(() => {
    return getPost(postId);
  }, []);
  return (
    <PostWrapper>
      <PostTitle>
        {post.postTitle}
      </PostTitle>
      <PostText>
        {post.postText}
      </PostText>
      <PostCreator to='/profile'>
        {post.creatorName}
      </PostCreator>
      <AddCommentForm/>
    </PostWrapper>
  );
};

const mstp = (state) => ({
  post: state.postsReducer.currentPost,
});

const PostContainer = connect(mstp, {
  getPost,
})(Post);

const PostWrapper = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const PostTitle = styled.h1`
  font-family: 'Roboto', sans-serif;
`;

const PostText = styled.p`
  font-family: 'Roboto', sans-serif;
`;

const PostCreator = styled(Link)`
  font-family: 'Roboto', sans-serif;
`;

export default PostContainer;
