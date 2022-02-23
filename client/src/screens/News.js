import React from 'react';
import styled from 'styled-components';
import NewsItem from '../components/News/NewsItem';
import AddPostWindowContainer from '../components/News/AddPostWindowContainer';
const News = ({isAuth, posts, addPostStatus, addPostStatusSet}) => {
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
       <AddPostWindowContainer addPostStatusSet={addPostStatusSet} />:<></>}
    </NewsWrapper>
  );
};


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

export default News;
