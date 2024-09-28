import React, { useState, useContext } from "react";
import logo from "../assets/logo.svg";
import { IoSearchOutline } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { showhidesidebar } from "../context/GlobalContext";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { open, setOpen } = useContext(showhidesidebar);
  const showSideBar = () => {
    open ? setOpen(false) : setOpen(true);
  };
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
    setOpen(true);
  };
  return (
    <nav className="bg-gray-800 w-[100vw] h-[4em] border-b-2 border-white sticky top-0 px-0 flex justify-around items-center z-10 md:px-10 md:justify-between">
      <img onClick={()=>navigate("/")} className="w-14" src={logo}></img>
      <div className="bg-gray-800 border-2 h-9 w-[14em] flex items-center px-0 md:px-2 md:w-[35em]">
        <IoSearchOutline className="text-white ml-2 md:ml-0" />
        <input
          className="bg-none ml-2 bg-gray-800 font-[40px] h-[100%] w-[90%]  text-white placeholder:text-white outline-none"
          placeholder="Search "
          type="text"
        ></input>
      </div>
      <div className="flex gap-2  md:gap-6">
        {open ? (
          <FaBarsStaggered
            onClick={showSideBar}
            className="block text-white text-2xl md:hidden"
          />
        ) : (
          <IoCloseSharp
            onClick={showSideBar}
            className="block text-white text-2xl md:hidden"
          />
        )}
        <button
          onClick={() => handleNavigate("/login")}
          className="text-white hidden md:block hover:text-purple-400 "
        >
          Log in
        </button>
        <button
          onClick={() => handleNavigate("/register")}
          className="bg-[#AE7AFF] hidden  font-[700] text-black px-4 py-[5px]  rounded hover:bg-slate-100 md:block"
        >
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
