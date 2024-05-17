import React from 'react'
import { HiOutlineUserGroup } from "react-icons/hi";
const Subscribed = () => {
  return (
    <div className=" flex  flex-col h-[15em]  items-center justify-center text-center text-white">
    <HiOutlineUserGroup className="text-4xl" />
     <h1>No people subscribers</h1>
     <p className="text-[13px]">
     This channel has yet to subscribe a new channel.
     </p>
   </div>
  )
}

export default Subscribed