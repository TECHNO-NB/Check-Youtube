import React from "react";
import LikeChannelDetails from "./LikeChannelDetails";
import axios from "axios";

const VideoPlay = ({ data }) => {
  if (!data || data === null) {
    return <h1>No Data</h1>;
  }
  const increasedViews = async (videoId) => {
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      const res = await axios.post(
        `http://localhost:4000/api/v1/videoviews/${videoId}`,
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
      <LikeChannelDetails />
    </div>
  );
};

export default VideoPlay;
