import React from 'react';
import styled from 'styled-components';
import profileIcon from '../../img/profile.svg';
import ProfileBarContainer from './ProfileBarContainer';

const ProfileMenu = ({profileBar, showProfileBar, hideProfileBar}) => {
  return (
    <ProfileArea
      onMouseEnter={showProfileBar}
      onMouseLeave={hideProfileBar}>
      <ProfileAreaLink>
        <ProfileAreaImg
          src={profileIcon}
          alt="profileIcon"/>
        {profileBar?<ProfileBarContainer/>:<></>}
      </ProfileAreaLink>
    </ProfileArea>
  );
};

const ProfileArea = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
`;
const ProfileAreaLink = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ProfileAreaImg = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

export default ProfileMenu;
