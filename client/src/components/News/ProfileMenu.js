import React, {useState} from 'react';
import styled from 'styled-components';
import profileIcon from '../../img/profile.svg';
import ProfileBar from './ProfileBar';

const ProfileMenu = () => {
  const [profileBar, showProfileBar] = useState(0);
  return (
    <ProfileArea>
      <ProfileAreaLink>
        <ProfileAreaImg
          src={profileIcon}
          alt="profileIcon"
          onClick={()=>profileBar?showProfileBar(0):showProfileBar(1)}/>
        {profileBar?<ProfileBar/>:<></>}
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
