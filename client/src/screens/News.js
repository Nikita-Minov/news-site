import React, {useEffect} from 'react';
import styled from 'styled-components';
import NewsItem from '../components/News/NewsItem';
import {getPosts} from '../redux/postsReducer';
import {getMe} from '../redux/usersReducer';
import {connect} from 'react-redux';
const News = ({getPosts, posts, getMe}) => {
  useEffect(() => {
    document.title = 'News';
  });
  return (
    <NewsWrapper>
      {posts.map((el, id) => {
        return (<NewsItem
          key={id}
          postTitle={el.postTitle}
          postText={el.postText}
          postId={el.postId}
          creatorName={el.creatorName}
        />);
      })}
    </NewsWrapper>
  );
};

const mstp = (state) => ({
  posts: state.postsReducer.posts,
});

const NewsContainer = connect(mstp, {
  getPosts,
  getMe,
})(News);

const NewsWrapper = styled.div`
  width: 70%;
  height: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export default NewsContainer;
