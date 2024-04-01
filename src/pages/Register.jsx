import React from "react";
import RegisterCom from "../auth/RegisterCom";
import Sidebar from "../components/Sidebar";

const Register = () => {
  return (
    <div className="bg-gray-800 w-[100vw]">
      <Sidebar />
      <div className="pl-[0.0em] mt-4 md:pl-[0em]">
        <RegisterCom />
      </div>
    </div>
  );
};

export default Register;
