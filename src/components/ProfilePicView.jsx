import React from "react";
import logo from "../../public/logo.jpg";
import { IoCloseSharp } from "react-icons/io5";

const ProfilePicView = ({props}) => {
    console.log(props)
  return (
    <div className=" fixed inset-0 w-full flex justify-center items-center">
      <div onClick={()=>props.setIsProfileView(false)} className="div relative top-[-15%] left-[17%] bg-black rounded-full p-2  cursor-pointer  ">
        <IoCloseSharp className="text-white text-2xl" />
      </div>
      <div className="img rounded-[100%] w-72 h-72 ">
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
