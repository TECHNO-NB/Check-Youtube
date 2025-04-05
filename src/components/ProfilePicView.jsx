import React from "react";
import logo from "../../public/logo.jpg";
import { IoCloseSharp } from "react-icons/io5";

const ProfilePicView = ({props}) => {
    console.log(props)
  return (
    <div className=" fixed inset-0 w-full flex justify-center items-center z-50 ">
      <div onClick={()=>props.setIsProfileView(false)} className="div fixed top-[28.5%] md:top-[30%] left-[58%] md:left-[53.5%] bg-black rounded-full p-2  cursor-pointer  ">
        <IoCloseSharp className="text-white text-2xl" />
      </div>
      <div className="img rounded-[100%] w-72 h-72  bg-black">
        <img
          className="rounded-[100%] w-full h-full"
          src={props.avatar || logo}
          alt="profile pic  "
        />
      </div>
    </div>
  );
};

export default ProfilePicView;
