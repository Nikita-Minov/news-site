import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import AddCommentFormContainer from
'../components/Post/AddCommentFormContainer';

const Post = ({post}) => {
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
      <AddCommentFormContainer/>
    </PostWrapper>
  );
};

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

export default Post;
