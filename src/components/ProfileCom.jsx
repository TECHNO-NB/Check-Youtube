import React from "react";
import img from "../assets/img5.jpeg";
import { FaUserPlus } from "react-icons/fa";

const ProfileCom = () => {
  return (
  <div className="main">
     <div className="div">
      <div className="bg-white w-[100vw] h-[16vh] rounded-[10px] md:w-[81vw] md:h-[20vh]">
        <h1 className="text-center pt-12 text-3xl font-bold ">Cover Pic Here</h1>
      </div>
      <div className="flex justify-between">
           {/* left content channel name */}
        <div className="flex">
        <div className="w-[5em] h-[5em] ml-2 bg-white border-black border-2 rounded-[100%] mt-[-25px] md:w-[8em] md:h-[8em] md:ml-0">
          <img className="w-full h-full rounded-[100%]" src={img} alt="profile"/>
      </div>
      <div className="div">
        <h1 className="text-white font-bold text-2xl">Techno Nb</h1>
      </div>
      </div>

      {/* right content subscribed */}
      <div className="subscriber-btn mr-2 mt-4 md:mr-40">
        <button className="bg-purple-600 w-26 text-[20px] font-bold px-2 py-1 rounded-md">Subscribed</button>
      </div>
      </div>
     </div>
  </div>
  );
};

export default ProfileCom;
