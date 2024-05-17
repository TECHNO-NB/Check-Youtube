import React, { useState } from "react";
import img from "../assets/img5.jpeg";
import { FaUserPlus } from "react-icons/fa";

const ProfileCom = () => {
  const [activeButton, setActiveButton] = useState("Videos");

  const activeCheck = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="main">
      <div className="div">
        <div className="bg-white w-[100vw] h-[16vh] rounded-[10px] md:w-[81vw] md:h-[20vh]">
          <h1 className="text-center pt-12 text-3xl font-bold ">Cover Pic Here</h1>
        </div>
        <div className="flex justify-between">
          {/* left content channel name */}
          <div className="flex gap-2">
            <div className="w-[5em] h-[5em] ml-2 bg-white border-black border-2 rounded-[100%] mt-[-25px] md:w-[8em] md:h-[8em] md:ml-0">
              <img className="w-full h-full rounded-[100%]" src={img} alt="profile" />
            </div>
            <div className="mt-2 md:mt-3">
              <h1 className="text-white font-bold text-[12px] md:text-2xl">Techno Nb</h1>
              <h6 className="text-gray-300 mt-[-3px] text-[12px] md:text-[16px]">@naresh</h6>
              <p className="text-gray-300 mt-[-0px] text-[10px] md:text-[16px]">600k Subscribers · 220 Subscribed</p>
            </div>
          </div>

          {/* right content subscribed */}
          <div className="w-30 h-10 text-center gap-1 px-2 rounded-md bg-purple-600 mr-2 mt-3 md:mt-7 md:mr-[40em] flex items-center justify-center hover:bg-red-200">
            <FaUserPlus />
            <button className="text-[15px] font-bold py-1 rounded-md md:text-[20px]">Subscribed</button>
          </div>
        </div>

        {/* Profile Page Btn */}
        <div className="flex w-[100vw] justify-around gap-2 md:w-[81vw] px-1 mt-6 border-b-2 md:px-0 text-white">
          <button
            onClick={() => activeCheck("Videos")}
            className={`w-80 h-6 md:h-10 ${activeButton === "Videos" ? "bg-white text-purple-500" : "text-gray-300"}`}
          >
            Videos
          </button>
          <button
            onClick={() => activeCheck("Playlist")}
            className={`w-80 h-6 md:h-10 ${activeButton === "Playlist" ? "bg-white text-purple-500" : "text-gray-300"}`}
          >
            Playlist
          </button>
          <button
            onClick={() => activeCheck("Tweets")}
            className={`w-80 h-6 md:h-10 ${activeButton === "Tweets" ? "bg-white text-purple-500" : "text-gray-300"}`}
          >
            Tweets
          </button>
          <button
            onClick={() => activeCheck("Subscribed")}
            className={`w-80 h-6 mb-1 md:h-10 ${activeButton === "Subscribed" ? "bg-white text-purple-500" : "text-gray-300"}`}
          >
            Subscribed
          </button>
        </div>
        <div className="div flex items-center justify-center w-[100vw] bg-white mt-4 md:w-[81vw]" >
          <h1>Content Here</h1>
        </div>
      </div>
    </div>
  );
};

export default ProfileCom;
