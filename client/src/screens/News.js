import React, {useEffect} from 'react';
import styled from 'styled-components';
import NewsItem from '../components/News/NewsItem';
const News = () => {
  useEffect(() => {
    document.title = 'News';
  });
  return (
    <NewsWrapper>
      <NewsItem/>
    </NewsWrapper>
  );
};

const NewsWrapper = styled.div`
  width: 70%;
  height: 1vh;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default News;
