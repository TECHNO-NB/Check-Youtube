import React from 'react'
import { GoFileDirectory } from "react-icons/go";

const Playlist = () => {
  return (
    <div className=" flex  flex-col h-[15em]  items-center justify-center text-center text-white">
   <GoFileDirectory className="text-4xl" />
    <h1>No playlist created</h1>
    <p className="text-[13px]">
    There are no playlist created on this channel.
    </p>
  </div>
  )
}

export default Playlist