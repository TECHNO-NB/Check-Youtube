import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import logo from "../assets/logo2.jpeg";

const LikeChannelDetails = () => {
  return (
    <div className="w-full mt-2 border-2 text-white pb-2">
      {/* head */}
      <div className="flex justify-between px-1 py-2 ">
        <div className="text-[1.5vh]">
          <h1 className="text-[1.1em]">JavaScripts Fundamantails:</h1>
          <p className="text-gray-200">30,164 Views ·18 hours ago</p>
        </div>
        <div className="flex gap-2">
          <div className="flex h-6">
            <button className="bg-blue-400 ml-2 px-1  rounded flex items-center">
              {<AiOutlineLike />} 300
            </button>
            <button className="bg-blue-400 ml-2 px-1 rounded flex items-center">
              {<AiOutlineDislike />} 10
            </button>
          </div>
          <div className="">
            <button className="bg-white text-black px-1 rounded">Save</button>
          </div>
        </div>
      </div>
      {/* middle part */}
      <div className="flex justify-between px-1">
        <div className="flex gap-1">
          <img className="rounded-[50%] w-10" src={logo} alt="logo" />
          <div className="flex flex-col gap-0">
            <h4>React Patterns</h4>
            <p className="text-[1.5vh] text-gray-200">757K Subscribers</p>
          </div>
        </div>

        <div className="">
          <button className="bg-purple-400 ml-2 px-2 py-2 rounded flex items-center">
            Subscribed
          </button>
        </div>
      </div>
      {/* end part descriptions */}
      <div className="w-full">
        <hr className="mt-2" />
        <details className="text-[1.2vh] px-2">
          <summary>
            🚀 Dive into the world of React with our latest tutorial series:
          </summary>
          <p>
            Whether you're a seasoned developer or just starting out, this
            series is designed to elevate your React skills to the next level.
          </p>
        </details>
      </div>
    </div>
  );
};

export default LikeChannelDetails;
