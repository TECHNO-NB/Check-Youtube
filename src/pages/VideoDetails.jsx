import React, { useEffect, useContext, useState } from "react";
import Sidebar from "../components/Sidebar";
import VideoPlay from "../videoplay/VideoPlay";

import axios from "axios";
import { useLocation, useParams } from "react-router-dom";

const VideoDetails = () => {
  const [video, setVideo] = useState();
  const [loading, setLoading] = useState(false);
  const { videoId } = useParams();
  if (videoId == null) {

  } else {
    useEffect(() => {
      (async () => {
        
        setLoading(true);
        const res = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/getvideobyid/${videoId}`
        );
        setLoading(false);

        setVideo(res.data.data);
        console.log("Getting data");
        console.log("getting data", res.data.data);
        setLoading(false);
      })();
    }, [videoId]);
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
