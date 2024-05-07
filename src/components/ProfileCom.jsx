import React from "react";
import img from "../assets/img5.jpeg";
import { FaUserPlus } from "react-icons/fa";

const ProfileCom = () => {
  return (
    <div className=" ml-[0%] px-2 h-[100%] w-[100%] relative  md:ml-[17.7%]">
      <div>
        <img
          className="w-[100vw] h-[10rem] md:w-[80%] md:h-[10rem]"
          alt="cover-img"
          src={img}
        />
      </div>

      <div className=" flex justify-between  align-center  w-[100%]">
        <div className="">
          <img
            className="w-24 h-20 border-2 relative top-[-1.4em] rounded-[100%]"
            alt="profile-img"
            src={img}
          />
        </div>

        <div className="mt-1 ml-2 text-white text-1xl">
          <h1 className="text-[0.8em]">React.</h1>
          <p className="text-[0.8em]">@reactpatterns</p>
          <p className="text-[0.7em] text-gray-300">600k Subscribers · 220 Subscribed</p>
        </div>
        <div className='flex align-center justify-center text-center bg-purple-400 mt-4 h-10 px-1 rounded-md hover:bg-red-600'>
      <FaUserPlus className="text-white text-center mt-3" />
        <button className=" h-10 text-[0.8em] px-2 rounded hover:bg-red-600">
          Subscribed
        </button>
        </div>
      </div>
      <div className="flex justify-evenly gap-1 border-b-2 py-2">
        <button className="bg-white h-8 mt-4 px-2 rounded hover:bg-red-600">
          Videos
        </button>
        <button className="bg-none text-white h-8 mt-4 px-2 rounded hover:bg-red-600">
          Playlist
        </button>
        <button className="bg-none text-white h-8 mt-4 px-2 rounded hover:bg-red-600">
          Tweets
        </button>

        <button className="bg-none text-white h-8 mt-4 px-2 rounded hover:bg-red-600">
          Subscribed
        </button>
      </div>
    </div>
  );
};

export default ProfileCom;
