import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import NewsItem from '../components/News/NewsItem';
import {getPosts} from '../redux/reducers/postReducer/postReducer';
import {getMe} from '../redux/reducers/userReducer/userReducer';
import {connect, useSelector} from 'react-redux';
import AddPostWindow from '../components/News/AddPostWindow';
const News = ({}) => {
  const posts = useSelector((state) => {
    return state.postReducer.posts;
  });
  const isAuth = useSelector((state) => {
    return state.userReducer.isAuth;
  });
  const [addPostStatus, addPostStatusSet] = useState(0);
  useEffect(() => {
    document.title = 'Новости';
  });
  return (
    <NewsWrapper>
      {isAuth?
  <AddNewsBtn onClick={() => addPostStatusSet(1)}>
    Добавить новость
  </AddNewsBtn>: <></>}
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
  posts: state.postReducer.posts,
  isAuth: state.userReducer.isAuth,
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
