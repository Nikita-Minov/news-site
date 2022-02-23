import React, {useState} from 'react';
import ProfileMenu from './ProfileMenu';

const ProfileMenuContainer = () => {
  const [profileBar, setProfileBar] = useState(0);
  const showProfileBar = () => setProfileBar(1);
  const hideProfileBar = () => setProfileBar(0);
  return (
    <ProfileMenu
      profileBar={profileBar}
      showProfileBar={showProfileBar}
      hideProfileBar={hideProfileBar}
    />
  );
};

export default ProfileMenuContainer;
