import React from "react";
import LikeChannelDetails from "./LikeChannelDetails";
import axios from "axios";
import Comloader from "../components/loader/Comloader";

const VideoPlay = ({ data }) => {
  if (!data || data === null) {
    return <Comloader/>
  }

  console.log(data)
  const increasedViews = async (videoId) => {
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      const res = await axios.post(
        `https://ytbackend-awfu.onrender.com/api/v1/videoviews/${videoId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            credentials: "include",
          },
        }
      );
    } catch (error) {
      console.error("Error increasing view count:", error);
    }
  };

  return (
    <div className="w-full h-full flex items-center px-2 justify-center flex-col">
      <video
        className="w-[99.9%]  md:w-[100vw] "
        src={data.videoFile}
        autoPlay
        controls
        onPlay={() => {
          increasedViews(data._id);
        }}
      />
      <LikeChannelDetails owner={{data}}/>
    </div>
  );
};

export default VideoPlay;
