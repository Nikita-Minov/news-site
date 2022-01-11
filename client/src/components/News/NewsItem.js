import React from 'react';
import styled from 'styled-components';
import commentIcon from '../../img/comment.svg';
import calendarIcon from '../../img/calendar.svg';
import likeIcon from '../../img/like.svg';
import viewIcon from '../../img/view.svg';

const NewsItem = ({postTitle, postText, postId, creatorName}) => {
  return (
    <NewsItemWrapper>
      <NewsItemContent>
        <NewsItemHeader>
          <NewsItemTitle>
            {postTitle}
          </NewsItemTitle>
          <NewsItemArticle>
            {creatorName}
          </NewsItemArticle>
        </NewsItemHeader>
        <NewsItemBody>
          <NewsText>
            {postText}
          </NewsText>
        </NewsItemBody>
        <NewsItemBottom>
          <Icon><StyledImg
            src={calendarIcon}
            alt="calendarIcon"/>13:33</Icon>
          <Icon><StyledImg
            src={likeIcon}
            alt="likeIcon"/>54</Icon>
          <Icon><StyledImg
            src={commentIcon}
            alt="commentIcon"/>32</Icon>
          <Icon><StyledImg
            src={viewIcon}
            alt="viewIcon"/>1000</Icon>
        </NewsItemBottom>
      </NewsItemContent>
    </NewsItemWrapper>
  );
};

const NewsItemWrapper = styled.div`
  width: 700px;
  height: 90px;
  background-color: #F4F4F4;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const NewsItemContent = styled.div`
  width: 650px;
  height: 70px;
  display: flex;
  flex-direction: column;
`;

const NewsItemHeader = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-around;
`;

const NewsItemBody = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: start;
`;

const NewsItemBottom = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: end;
  align-items: start;
`;

const NewsItemTitle = styled.a`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  color: #002FD8;
`;

const NewsItemArticle = styled.a`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #3C3737;
`;

const NewsText = styled.p`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
`;

const Icon = styled.p`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  padding: 0 10px;
  display: flex;
  height: 100%;
  align-items: center;
`;

const StyledImg = styled.img`
  color: '#676767';
`;

export default NewsItem;
