import React from "react";
import { AiOutlineHome, AiOutlineLike } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { GoFileDirectory } from "react-icons/go";
import { RiUserFollowLine } from "react-icons/ri";

import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div className="fixed flex justify-around bottom-0 text-white text-2xl w-full border-t-2  bg-gray-800 h-[8vh] z-10 sm:hidden">
      <div
        onClick={() => {
          handleNavigate("/");
        }}
        className="flex flex-col items-center justify-center  text-center text-white  cursor-pointer hover:text-purple-800 "
      >
        <AiOutlineHome className="" />
        <span className="text-sm">Home</span>
      </div>

      <div
        onClick={() => {
          handleNavigate("/collections");
        }}
        className="flex flex-col items-center justify-center  text-center text-white  cursor-pointer hover:text-purple-800 "
      >
        <GoFileDirectory />
        <span className="text-sm">Collections</span>
      </div>

      <div
        onClick={() => {
          handleNavigate("/uploadvideo");
        }}
        className="flex flex-col items-center justify-center w-10 h-10 text-2xl text-center text-white  cursor-pointer hover:text-purple-800 "
      >
        <IoIosAddCircleOutline className="w-full h-full" />
      </div>

      <div
        onClick={() => {
          handleNavigate("/subscribers");
        }}
        className="flex flex-col items-center justify-center  text-center text-white  cursor-pointer hover:text-purple-800 "
      >
        <RiUserFollowLine />
        <span className="text-sm">Subscribers</span>
      </div>

      <div
        onClick={() => {
          handleNavigate("/profile");
        }}
        className="flex flex-col items-center justify-center  text-center text-white  cursor-pointer hover:text-purple-800 "
      >
        <FaRegUserCircle />
        <span className="text-sm">Profile</span>
      </div>
    </div>
  );
};

export default Footer;
