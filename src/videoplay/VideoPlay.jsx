import React from "react";
import LikeChannelDetails from "./LikeChannelDetails";
import axios from "axios";
import Comloader from "../components/loader/Comloader";
import useVideosFetch from "../hooks/useVideosFetch";
import VideoCard from "../components/VideoCard";
import Comments from "./Comments";

const VideoPlay = ({ data, loading }) => {
  if (!data || data === null) {
    return <Comloader />;
  }

  const increasedViews = async (videoId) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/videoviews/${videoId}`
      );
    } catch (error) {
      console.error("Error increasing view count:", error);
    }
  };

  const { videos, load, error } = useVideosFetch("api/v1/getallvideos");

  return (
    <div className="w-[100vw] flex flex-col overflow-y-scroll  gap-1 px-2 justify-center md:w-[82vw] lg:flex-row">
      <div className="w-[100%] h-[20%]   lg:w-[70%] ">
        {loading ? (
          <h1>loading</h1>
        ) : (
          <video
            className=" "
            src={data.videoFile}
            autoPlay
            controls
            onPlay={() => {
              increasedViews(data._id);
            }}
          />
        )}
        <LikeChannelDetails owner={data} />
        {/* {comments} */}
        <div>
          <Comments videoId={data._id} />
        </div>
        <div></div>
      </div>
      <div className="right w-[100%] md:h-[85vh] grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1  lg:w-[30%] md:overflow-y-scroll lg:mr-2 lg:pr-4 scroll-me-80">
        {load ? <Comloader /> : null}
        {videos.length > 0 &&
          videos.map((videoData) => {
            if (videoData._id != data._id) {
              return <VideoCard key={videoData._id} data={videoData} />;
            }
          })}
      </div>
    </div>
  );
};

export default VideoPlay;
