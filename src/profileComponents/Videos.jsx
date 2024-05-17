import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";

const Videos = () => {
  return (
    <div className=" flex  flex-col h-[15em]  items-center justify-center text-center text-white">
      <FaRegCirclePlay className="text-4xl" />
      <h1>No videos uploaded</h1>
      <p className="text-[13px]">
        This page has yet to upload a video. Search another <br /> page in order
        to find more videos.
      </p>
    </div>
  );
};

export default Videos;
