import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ data }) => {
  const navigate = useNavigate();
  const [dateVideo, setDateVideo] = useState("");

  const VideoDetails = (videoId) => {
    navigate(`/videodetails/${videoId}`);
  };

  const getUplodeDate = (date) => {
    
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);


    const intervals = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
    };

    for (let [unit, value] of Object.entries(intervals)) {
      const count = Math.floor(seconds / value);
      if (count >= 1) {
        return `${count} ${unit}${count > 1 ? "s" : ""} ago`;
      }
    }
    return "Just now";
  };

  useEffect(() => {
    const date = getUplodeDate(data.createdAt);
    setDateVideo(date);
  }, [data.createdAt]);
  // Calculate video duration and format it
  const durationInSeconds = data.duration;
  const hours = Math.floor(durationInSeconds / 3600);
  const minutes = Math.floor((durationInSeconds % 3600) / 60);
  const seconds = Math.floor(durationInSeconds % 60);

  const formattedDuration = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return (
    <div className="flex flex-col   items-center w-full  p-2 bg-gray-800 text-white rounded-lg shadow-lg cursor-pointer    md:p-3">
      {/* Video Thumbnail */}
      <div className="relative w-full h-48 md:h-60">
        <img
          className="w-full h-full object-fill rounded-lg"
          onClick={() => VideoDetails(data._id)}
          src={data.thumbnail}
          alt={data.thumbnail}
        />
        <p className="absolute bottom-2 right-2 bg-black text-white px-2 py-1 rounded text-sm">
          {formattedDuration}
        </p>
      </div>

      <div className="mt-4 w-full flex gap-2">
        <img
          onClick={() => navigate(`/otherprofile/${data.owner.username}`)}
          className="w-10 h-10 rounded-full object-cover"
          src={data.owner.avatar}
          alt={data.owner.avatar}
        />

        {/* Video Title and Details */}
        <div className="flex flex-col w-full">
          <h1 className=" text-lg font-semibold">{data.title}</h1>
          <p className="text-sm text-gray-400">
            {data.views} Views · <span>{dateVideo}</span>
          </p>
          <p className="text-sm text-gray-400">{data.owner.fullName}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
