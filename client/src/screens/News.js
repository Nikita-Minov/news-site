import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import NewsItem from '../components/News/NewsItem';
import {getPosts} from '../redux/postsReducer';
import {getMe} from '../redux/usersReducer';
import {connect} from 'react-redux';
import AddPostWindow from '../components/News/AddPostWindow';
const News = ({posts, isAuth}) => {
  const [addPostStatus, addPostStatusSet] = useState(0);
  useEffect(() => {
    document.title = 'News';
  });
  return (
    <NewsWrapper>
      {isAuth?
  <AddNewsBtn onClick={() => addPostStatusSet(1)}>Add news</AddNewsBtn>: <></>}
      {posts.map((el, id) => {
        return (<NewsItem
          key={id}
          postTitle={el.postTitle}
          postText={el.postText}
          postId={el.postId}
          creatorName={el.creatorName}
        />);
      })}
      {addPostStatus?
       <AddPostWindow addPostStatusSet={addPostStatusSet} />:<></>}
    </NewsWrapper>
  );
};

const mstp = (state) => ({
  posts: state.postsReducer.posts,
  isAuth: state.usersReducer.isAuth,
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

const AddNewsBtn = styled.button`
  border: 2px solid #CCCCCC;
  outline: 2px solid #CCCCCC;
  max-width: 150px;
  padding: 10px 0px;
  border-radius: 15px;
  margin-bottom: 50px;
  &:hover {
    cursor: pointer;
  }
`;

export default NewsContainer;
