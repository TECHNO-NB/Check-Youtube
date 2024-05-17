import React from 'react'
import { HiOutlineUserGroup } from "react-icons/hi";

const Tweets = () => {
  return (
    <div className=" flex  flex-col h-[15em]  items-center justify-center text-center text-white">
    <HiOutlineUserGroup className="text-4xl" />
     <h1>No Tweets</h1>
     <p className="text-[13px]">
     This channel has yet to make a Tweet.
     </p>
   </div>
  )
}

export default Tweets