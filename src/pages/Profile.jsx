import React from 'react'
import ProfileCom from '../components/ProfileCom';
import Sidebar from '../components/Sidebar';

const Profile = () => {
  return (
    <div className="bg-gray-800 w-[100vw]">
      <Sidebar />
      <div className="pl-[0.0em] mt-4 md:pl-[17em]">
        <ProfileCom />
      </div>
    </div>
  )
}

export default Profile;