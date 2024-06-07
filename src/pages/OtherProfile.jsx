import React from 'react'
import Sidebar from '../components/Sidebar';
import { useParams } from 'react-router-dom';
import OtherProfileCom from '../components/OtherProfileCom';


const OtherProfile = () => {
    const username=useParams();
  
  return (
    <div className="bg-gray-800 w-[100vw]">
      <Sidebar />
      <div className="pl-[0.0em] mt-4 md:pl-[17em]">
        <OtherProfileCom data={username} />
      </div>
    </div>
  )
}

export default OtherProfile