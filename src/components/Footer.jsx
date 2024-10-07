import React from "react";
import { AiOutlineHome, AiOutlineLike } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";

const Footer = () => {
  return (
    <div className="fixed flex justify-around  b-0 bottom-0 text-white text-2xl w-full border-t-2  bg-gray-800 h-12 sm:hidden">
      <div
        onClick={() => {
          handleNavigate("/");
        }}
        className="flex flex-col items-center justify-center  text-center text-white  cursor-pointer hover:bg-purple-800 "
      >
        <AiOutlineHome className="" />
        <span className="text-sm">Home</span>
      </div>
  
      <div
        onClick={() => {
          handleNavigate("/");
        }}
        className="flex flex-col items-center justify-center  text-2xl text-center text-white  cursor-pointer hover:bg-purple-800 "
      >
      <IoIosAddCircleOutline className="text-xl w-10 h-10"/>
      </div>
  


      <div
        onClick={() => {
          handleNavigate("/");
        }}
        className="flex flex-col items-center justify-center  text-center text-white  cursor-pointer hover:bg-purple-800 "
      >
        <AiOutlineHome className="" />
        <span className="text-sm">You</span>
      </div>
    </div>
  );
};

export default Footer;
