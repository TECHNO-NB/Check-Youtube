import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
const VideoCard = (videoData) => {
  const navigate = useNavigate();

  const VideoDetails = (videoId) => {
    navigate("/videodetails", { state: { videoId: videoId } });
  };

  return (
    <div className="w-[100vw] h-[100%] z-[-4] bg-gray-800  grid grid-cols-1 gap-4 px-2 mr-24 text-white md:mr-14 sm:grid-cols-4 md:grid-cols-4  md:w-[82.5vw] ">
      <div className="flex flex-col items-center gap-2 w-[100%]  cursor-pointer ">
        <div className="relative">
          <img
            className="w-[100%]"
            onClick={() => VideoDetails(videoData.data._id)}
            src={videoData.data.thumbnail}
          ></img>
          <p className="absolute bottom-2 right-2 bg-black px-2">20:45</p>
        </div>
        <div className="w-full">
          <div className="flex gap-2">
            <img
              className="w-10 h-10 rounded-[50%]"
              src="./src/assets/logo4.jpeg"
            />
            <div className="div">
              <h1 className="text-white text-[1.2em]">
                {videoData.data.title}
              </h1>
              <p className=" text-gray-200 font-[300]">
                10.3k Views · <span>44 minutes ago</span>
              </p>
              <p className=" text-gray-200 font-[400]">Code Master</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
