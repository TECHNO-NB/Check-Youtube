import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import img3 from "../assets/logo4.jpeg";
const VideoCard = (videoData) => {
  const navigate = useNavigate();

  const VideoDetails = (videoId) => {
    navigate("/videodetails", { state: { videoId: videoId } });
  };
  const durationInSeconds = videoData.data.duration;
console.log(videoData.data.createdAt)
console.log(Date("2015-03-25"))
  const hours = Math.floor(durationInSeconds / 3600);
  const minutes = Math.floor((durationInSeconds % 3600) / 60);
  const seconds = Math.floor(durationInSeconds % 60);

  const formattedDuration = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return (
    <div className="w-[100vw] h-[100%] z-[] bg-gray-800  grid grid-cols-1 gap-4 mt-2 px-2 mr-24 text-white md:mr-14 md:grid-cols-4  md:w-[82.5vw] ">
      <div className="flex flex-col items-center gap-2 w-[100%]  cursor-pointer ">
        <div className="relative">
          <img
            className="w-[100%]"
            onClick={() => VideoDetails(videoData.data._id)}
            src={videoData.data.thumbnail}
          ></img>
          <p className="absolute bottom-2 right-2 bg-black px-2">
            {formattedDuration}
          </p>
        </div>
        <div className="w-full">
          <div className="flex gap-2">
            <img
              className="w-10 h-10 rounded-[50%]"
              src={videoData.data.owner.avatar}
            />
            <div className="div">
              <h1 className="text-white text-[1.2em]">
                {videoData.data.title}
              </h1>
              <p className=" text-gray-200 font-[300]">
                {videoData.data.views} Views · <span>44 minutes ago</span>
              </p>

              <p className=" text-gray-200 font-[400] pb-2">
                {videoData.data.owner.fullName}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
