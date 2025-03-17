import React from 'react'
import Sidebar from '../components/Sidebar'

import LikedVideosComp from '../components/LikedVideosComp'

const LikedVideos = () => {
    
  return (
    <div className="bg-gray-800 w-[100vw]">
    <Sidebar/>
    <div className="pl-[0.0em] mt-4 md:pl-[17em]">
      <LikedVideosComp/>
    </div>
  </div>
  )
}

export default LikedVideos