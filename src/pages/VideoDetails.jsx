import React, { useEffect, useContext, useState } from "react";
import Sidebar from "../components/Sidebar";
import VideoPlay from "../videoplay/VideoPlay";
import Comments from "../videoplay/Comments";

import axios from "axios";
import { useLocation } from "react-router-dom";

const VideoDetails = () => {
  const [video, setVideo] = useState();
  const location = useLocation();
  if (location.state.videoId == null) {
    console.log("nothings");
  } else {
    useEffect(() => {
      (async () => {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/getvideobyid/${
            location.state.videoId
          }`
        );
        setVideo(res.data.data);
        console.log(res.data.data);
      })();
    }, []);
  }

  return (
    <div className="bg-gray-800 w-[100vw]">
      <Sidebar />
      <div className="pl-[0.0em] px-0 mt-4 md:pl-[16.8em]">
        <VideoPlay data={video} />
      </div>
      {/* <div className="pl-[0.5em] px-2 mt-0 md:pl-[16.8em]">
        <Comments />
      </div> */}
    </div>
  );
};

export default VideoDetails;
