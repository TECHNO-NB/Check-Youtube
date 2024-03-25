import React,{ useState,useContext } from "react";
import logo from "../assets/logo.svg";
import { IoSearchOutline } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import {showhidesidebar} from "../context/GlobalContext"
import { IoCloseSharp } from "react-icons/io5";


const Navbar = () => {
  const {open,setOpen}=useContext(showhidesidebar);
  const showSideBar=()=>{
    open ? setOpen(false) : setOpen(true);
  }
return( 
    <nav className="bg-gray-800 w-[100vw] h-[4em] border-b-2 border-white sticky top-0 px-0 flex justify-around items-center z-10 md:px-10 md:justify-between">
    <img className="w-14" src={logo}></img>
    <div className="bg-gray-800 border-2 h-9 w-[14em] flex items-center px-0 md:px-2 md:w-[35em]" >
  <IoSearchOutline className="text-white ml-2 md:ml-0"/>
  <input className="bg-none ml-2 bg-gray-800 font-[40px] h-[100%] w-[100%] text-white placeholder:text-white outline-none" placeholder="Search " type="text"></input>
    </div>
     <div className="flex gap-2  md:gap-6">
        {
        open ? 
        <FaBarsStaggered onClick={showSideBar} className="block text-white text-2xl md:hidden"/>
        :
        <IoCloseSharp onClick={showSideBar} className="block text-white text-2xl md:hidden"/>
        }
      <button className="text-white hidden md:block">Log in</button>
      <button  className="bg-[#AE7AFF] hidden  font-[700] text-black px-4 py-[5px]  border-b border-purple-200 md:block">Sign up</button>
    </div> 

    </nav>
  )
};

export default Navbar;
