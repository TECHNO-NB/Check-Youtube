import React, { useEffect, useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import Videos from "../profileComponents/Videos";
import Playlist from "../profileComponents/Playlist";
import Tweets from "../profileComponents/Tweets";
import Subscribed from "../profileComponents/Subscribed";
import "../index.css"

const ProfileCom = () => {
  const [activeButton, setActiveButton] = useState("Videos");

  

  const user = useSelector((state) => state.login);
  const activeCheck = (buttonName) => {
    setActiveButton(buttonName);
  };

  const renderActiveComponent = () => {
    switch (activeButton) {
      case "Videos":
        return <Videos />;
      case "Playlist":
        return <Playlist />;
      case "Tweets":
        return <Tweets />;
      case "Subscribed":
        return <Subscribed />;
      default:
        return null;
    }
  };

  if (!user) {
    return (
      <h1 className="text-center text-3xl mt-40 text-white">User Not Login</h1>
    );
  }

  const {
    coverImage,
    avatar,
    fullName,
    username,
    totalSubscriber,
    totalSubscribedToOther,
  } = user;

  return (
    <div className="main">
      <div className="div">
        <div className="bg-white w-[100vw] overflow-hidden flex items-center justify-center bg-cover h-[16vh] rounded-[10px] md:w-[81vw] md:h-[35vh] ">
          {coverImage && (
            <img
              src={coverImage}
              alt="Cover Image"
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="flex justify-between">
          {/* Left content: channel name */}
          <div className="flex gap-2">
            <div className="w-[5em] h-[5em] ml-2 bg-white border-black border-2 rounded-full mt-[-25px] md:w-[8em] md:h-[8em] md:ml-0">
              {avatar && (
                <img
                  className="w-full h-full  rounded-full"
                  src={avatar}
                  alt="Profile"
                />
              )}
            </div>
            <div className="mt-2 md:mt-3">
              <h1 className="text-white font-bold text-[12px] md:text-2xl">
                {fullName}
              </h1>
              <h6 className="text-gray-300 mt-[-3px] text-[12px] md:text-[16px]">
                {`@${username}`}
              </h6>
              <p className=" text-gray-300 mt-[-0px] text-[10px] md:text-[16px]">
                {totalSubscriber} Subscribers · {totalSubscribedToOther}{" "}
                Subscribed
              </p>
            </div>
          </div>

          {/* Right content: subscribed */}
          <div className="btn w-26 h-10 text-center gap-1 px-2  bg-purple-600 mr-2 mt-3 md:mt-7 md:mr-[10em] flex items-center justify-center">
            <FaUserPlus />
            <button className="text-[15px] font-bold py-1 rounded-md md:text-[20px]">
              Subscribed
            </button>
          </div>
        </div>

        {/* Profile Page Buttons */}
        <div className="flex w-[100vw] justify-around gap-2 md:w-[81vw] px-1 mt-6 border-b-2 md:px-0 text-white">
          {["Videos", "Playlist", "Tweets", "Subscribed"].map((btn) => (
            <button
              key={btn}
              onClick={() => activeCheck(btn)}
              className={`w-80 h-6 md:h-10 ${
                activeButton === btn
                  ? "bg-white text-purple-500"
                  : "text-gray-300"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>
        <div className="h-[100%] w-[100vw] mt-4 md:w-[81vw]">
          {renderActiveComponent()}
        </div>
      </div>
    </div>
  );
};

export default ProfileCom;
