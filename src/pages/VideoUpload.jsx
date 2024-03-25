import React from "react";
import UploadVideos from "../components/UploadVideos";
import Sidebar from "../components/Sidebar";

const VideoUpload = () => {
  return (
    <div className="bg-gray-800 w-[100vw]">
      <Sidebar />
      <div className="pl-[0.0em] mt-4 md:pl-[0em]">
        <UploadVideos />
      </div>
    </div>
  );
};

export default VideoUpload;
