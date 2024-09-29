import React from "react";
import { useNavigate } from "react-router-dom";
import thumbnail from "../assets/thumbnail.jpg";

const VideoCard = ({ data }) => {
  const navigate = useNavigate();

  const VideoDetails = (videoId) => {
    navigate("/videodetails", { state: { videoId: videoId } });
  };

  // Calculate video duration and format it
  const durationInSeconds = data.duration;
  const hours = Math.floor(durationInSeconds / 3600);
  const minutes = Math.floor((durationInSeconds % 3600) / 60);
  const seconds = Math.floor(durationInSeconds % 60);

  const formattedDuration = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return (
    <div className="flex flex-col   items-center w-full  p-2 bg-gray-800 text-white rounded-lg shadow-lg cursor-pointer md:w-[330px] lg:w-[420px]   md:p-3">
      {/* Video Thumbnail */}
      <div className="relative w-full h-48 md:h-60">
        <img
          className="w-full h-full object-cover rounded-lg"
          onClick={() => VideoDetails(data._id)}
          src={data.thumbnail}
          alt={"fhh"}
        />
        <p className="absolute bottom-2 right-2 bg-black text-white px-2 py-1 rounded text-sm">
          {"1:45"}
        </p>
      </div>

      <div className="mt-4 w-full flex gap-2">
        <img
          // onClick={() => navigate(`/otherprofile/${"dd"}}`)}
          className="w-10 h-10 rounded-full object-cover"
          src={data.owner.avatar}
          alt={"anresh"}
        />

        {/* Video Title and Details */}
        <div className="flex flex-col w-full">
          <h1 className="text-lg font-semibold">{"hello world"}</h1>
          <p className="text-sm text-gray-400">
            {10} Views · <span>44 minutes ago</span>
          </p>
          <p className="text-sm text-gray-400">{"Naresh Bhattarai"}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
