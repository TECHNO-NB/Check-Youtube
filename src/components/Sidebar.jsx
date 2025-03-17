import React, { useState, useContext } from "react";
import { AiOutlineHome, AiOutlineLike } from "react-icons/ai";
import { LuTimerReset } from "react-icons/lu";
import { BsCameraVideo } from "react-icons/bs";
import { GoFileDirectory } from "react-icons/go";
import { RiUserFollowLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { showhidesidebar } from "../context/GlobalContext";

const Sidebar = () => {
  const { open, setOpen } = useContext(showhidesidebar);
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
    setOpen(true);
  };
  return (
    <div
      className={`fixed top-16 ${
        open ? "left-[-30em]" : "left-[0em]"
      } bg-none transition-all z-50 bg-gray-800 w-[225px] h-[89svh] flex flex-col justify-between text-center  border-r-2 border-white border-x-5 md:left-[0em] md:w-[263px] md:h-[90vh]`}
    >
      <div className=" flex flex-col items-center text-center gap-[7px]   ">
        <div
          onClick={() => {
            handleNavigate("/");
          }}
          className="flex items-center py-[5px] mt-1 md:mt:2 rounded-sm text-white border-2 w-[95%]  gap-4 text-[1.2em] cursor-pointer hover:bg-purple-800 "
        >
          <AiOutlineHome className="ml-2" />
          <span>Home</span>
        </div>
        <div
          onClick={() => {
            handleNavigate("/getlikedby");
          }}
          className=" flex items-center py-[5px] bg-none rounded-sm text-white border-2 w-[95%]  gap-4 text-[1.2em] cursor-pointer hover:bg-purple-800 "
        >
          <AiOutlineLike className="ml-2" />
          <span>Liked Videos</span>
        </div>
        <div
          onClick={() => {
            handleNavigate("/profile");
          }}
          className=" flex items-center py-[5px]  rounded-sm text-white border-2 w-[95%]  gap-4 text-[1.2em] cursor-pointer hover:bg-purple-800 "
        >
          <FaRegUserCircle className="ml-2" />
          <span>Profile</span>
        </div>

        <div
          onClick={() => {
            handleNavigate("/uploadvideo");
          }}
          className=" flex items-center py-[5px]  rounded-sm text-white border-2 w-[95%]  gap-4 text-[1.2em] cursor-pointer hover:bg-purple-800 "
        >
          <BsCameraVideo className="ml-2" />
          <span>Upload Video</span>
        </div>

        <div
          onClick={() => {
            handleNavigate("/collections");
          }}
          className=" flex items-center py-[5px]  rounded-sm text-white border-2 w-[95%]  gap-4 text-[1.2em] cursor-pointer hover:bg-purple-800 "
        >
          <GoFileDirectory className="ml-2" />
          <span>Collections</span>
        </div>
        <div
          onClick={() => {
            handleNavigate("/subscribers");
          }}
          className=" flex items-center py-[5px]  rounded-sm text-white border-2 w-[95%]  gap-4 text-[1.2em] cursor-pointer hover:bg-purple-800 "
        >
          <RiUserFollowLine className="ml-2" />
          <span>Subscribers</span>
        </div>
      </div>

      {/* sideBar Bottom Part */}
      <div className="sidebar  flex flex-col  items-center gap-2">
        {/* For Pic */}
        <div className="hidden  md:flex md:items-center md:w-[100%]  ">
          <div className=" flex items-center py-[5px]  justify-center ml-[5px]  rounded-sm text-white border-2 w-[95%]  gap-4 text-[1.2em] cursor-pointer hover:bg-purple-800">
            <span>Settings</span>
          </div>
        </div>

        {/* pc end */}

        {/* For mobile */}
        <div className="w-full  flex flex-col gap-2  items-center md:hidden ">
          <div
            onClick={() => handleNavigate("/login")}
            className=" flex items-center py-[5px]  justify-center  rounded-sm text-white border-2 w-[95%]  gap-4 text-[1.2em] cursor-pointer hover:bg-purple-800"
          >
            <span>Log in</span>
          </div>
          <div
            onClick={() => handleNavigate("/register")}
            className="flex items-center py-[5px] text-center justify-center  bg-[#AE7AFF]  rounded-sm text-white border-2 w-[95%]  gap-4 text-[1.2em] cursor-pointer hover:bg-purple-800  "
          >
            <span>Sign up</span>
          </div>
        </div>

        {/* mobile end */}
      </div>
    </div>
  );
};

export default Sidebar;
