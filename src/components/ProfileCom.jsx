import React from 'react'
import img from "../assets/img5.jpeg";

const ProfileCom = () => {
  return (
    <div className=' ml-[0%] px-2 h-[100%] w-[100%] relative md:ml-[17.7%]'>
    <img className='w-[100%] h-[10rem] md:w-[80%]' alt='cover-img' src={img} />
    <div className="div">
    <img className='w-20 absolute bottom-[-2em] h-20 border-2 rounded-[100%]' alt='cover-img' src={img}/>
    </div>
    </div>
  )
}

export default ProfileCom;