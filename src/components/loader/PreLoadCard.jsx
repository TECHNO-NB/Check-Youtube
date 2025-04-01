import React from "react";

const PreLoadCard = () => {
  return (
    <div className="flex flex-col   items-center w-full  p-2 bg-gray-800 text-white border-2 rounded-lg shadow-lg cursor-pointer    md:p-3">
      {/* Video Thumbnail */}
      <div className="relative w-full h-48 md:h-60 ">
        <p className="absolute bottom-2 right-2  text-white px-2 py-1 rounded text-sm"></p>
      </div>

      <div className="mt-4 w-full flex gap-2">
        {/* Video Title and Details */}
        <div className="flex flex-col w-full"></div>
      </div>
    </div>
  );
};

export default PreLoadCard;
