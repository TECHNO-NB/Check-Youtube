import React from 'react'

const Uploadloader = () => {
  return (
    <div className='fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-white'>
        <div className='px-6 w-[500px] h-60 bg-[#1F2937] border  text-2xl rounded-2xl'>
         <h6 className='mt-2 text-xl'>Uploading Video...</h6>
         <h5 className='text-xl'>Track your video uploading process..</h5>
         <div className="w-[450px] border h-20 mt-2"></div>
        </div>
    </div>
  )
}

export default Uploadloader