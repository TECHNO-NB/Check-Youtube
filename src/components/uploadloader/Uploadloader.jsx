import React from 'react'
import { IoCloseSharp } from "react-icons/io5";

const Uploadloader = () => {
  return (
    <div className='fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-white'>
        <div className='px-6 w-[300px] h-60 bg-[#1F2937] border  text-2xl rounded-2xl md:w-[500px] md:h-60'>
         <div className="flex justify-between items-center mt-2">
         <h6 className=' text-xl'>Uploading Video...</h6>
         <IoCloseSharp

           className="text-white text-2xl cursor-pointer "
          />
         </div>
         <h5 className='text-[10px] md:text-[15px]'>Track your video uploading process..</h5>
         <div className="w-[250px] border h-20 mt-2 md:w-[450px]"></div>
         <div className='flex justify-between mt-4 gap-4'>
          <button className='w-[55vw] rounded-[5px] bg-none border h-10 cursor-pointer  md:w-[14vw]'>Cancel</button>
          <button className='w-[55vw] rounded-[5px] bg-purple-600 h-10 cursor-pointer md:w-[14vw]'>Finish</button>
         </div>
        </div>
    </div>
  )
}

export default Uploadloader