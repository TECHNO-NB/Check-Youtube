import React, { useState, useContext, useEffect } from "react";
import logo from "../assets/logo.svg";
import { IoSearchOutline } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { showhidesidebar } from "../context/GlobalContext";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/SearchSlice";
import "../index.css"

const Navbar = () => {
  const { open, setOpen } = useContext(showhidesidebar);
  const [searchChar, setSearchChar] = useState("");

  const dispatch = useDispatch();
  const showSideBar = () => {
    open ? setOpen(false) : setOpen(true);
  };
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
    setOpen(true);
  };

  const handleSearch = (e) => {
    setSearchChar(e.target.value); 
  };
  
  useEffect(() => {
    dispatch(setSearchTerm(searchChar.trim())); 
  }, [searchChar]); 

  return (
    <nav className="bg-gray-800 w-[100vw] h-[3.7rem]  border-b-2 border-white sticky top-0 px-0 flex justify-around items-center z-50 md:px-10 md:justify-between">
      <img onClick={() => navigate("/")} className="w-14" src={logo}></img>
      <div className="bg-gray-800 border-2 h-9 w-[14em] flex items-center px-0 sm:w-[28em] md:px-2 md:w-[30em] lg:w-[35em]">
        <IoSearchOutline className="text-white ml-2 md:ml-0" />
        <input
          onChange={handleSearch}
          className="bg-none ml-2 bg-gray-800 font-[40px] h-[100%] w-[90%]  text-white placeholder:text-white outline-none"
          placeholder="Search"
          value={searchChar}
          type="search"
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
          className="btn bg-[#AE7AFF] hidden  font-[700] text-black px-4 py-[5px]  md:block"
        >
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
