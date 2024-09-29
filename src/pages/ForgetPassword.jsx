import React from 'react'
import Sidebar from "../components/Sidebar";
import ForgetPassComp from '../auth/ForgetPassComp';

const ForgetPassword = () => {
  return (
    <div className="bg-gray-800 w-[100vw]">
      <Sidebar/>
      <div className="pl-[0.0em] mt-4 md:pl-[0em]">
        <ForgetPassComp />
      </div>
    </div>
  )
}

export default ForgetPassword