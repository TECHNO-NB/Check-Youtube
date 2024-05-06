import React from 'react'
import img from "../assets/img5.jpeg";

const ProfileCom = () => {
  return (
    <div className=' ml-[0%] px-2 h-[100%] w-[100%] relative md:ml-[17.7%]'>
      <div> 
         <img className='w-[100vw] h-[10rem] md:w-[80%]' alt='cover-img' src={img} />
         </div>
  
    <div className=" flex justify-between align-center  w-[100%]">
      <div className="">
      <img className='w-24 h-20 border-2 relative top-[-1em] rounded-[100%]' alt='cover-img' src={img}/>
      </div>
   
    <div className="mt-1 ml-2 text-white text-1xl">
      <h1 className='text-[0.8em]'>React.</h1>
      <p className='text-[0.8em]'>@reactpatterns</p>
      <p className='text-[0.8em]'>600k Subscribers · 220 Subscribed</p>
    </div>
    <button className='bg-purple-800 px-4 h-8 mt-2 text-center rounded-[10px] text-white py-2'>Subscribed</button>
    </div>
    </div>
  )
}

export default ProfileCom;