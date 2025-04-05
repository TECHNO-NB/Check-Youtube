import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import VideoCard from "../components/VideoCard";
import Comloader from "../components/loader/Comloader";

const Videos = () => {
  const [allVideos, setAllVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getuserVideos = async () => {
      setIsLoading(true);
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/getuservideos`
        );
        setIsLoading(false);
        setAllVideos(res.data);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    getuserVideos();
  }, []);
  return (
    <>
    {isLoading ? <Comloader/> : null}
      {allVideos && allVideos.length > 0 ? (
        <div className="videoList ">
          {allVideos.map((videoData) => (
            <VideoCard key={videoData._id} data={videoData} />
          ))}
        </div>
      ) : (
        <div className=" flex  flex-col h-[15em]  items-center justify-center text-center text-white">
          <FaRegCirclePlay className="text-4xl" />
          <h1>No videos uploaded</h1>
          <p className="text-[13px]">
            This page has yet to upload a video. Search another <br /> page in
            order to find more videos.
          </p>
        </div>
      )}
    </>
  );
};

export default Videos;
