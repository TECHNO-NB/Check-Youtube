import React, { useState, useEffect } from "react";
import LikeChannelDetails from "./LikeChannelDetails";

const VideoPlay = (video) => {
 
  console.log(video)

  return (
    <div className="w-full h-full flex items-center px-2 justify-center flex-col">
      <video
        className="w-[99.5%] md:w-[100%] "
        src={video.data}
        autoPlay
        controls
      />
      <LikeChannelDetails />
    </div>
  );
};

export default VideoPlay;
