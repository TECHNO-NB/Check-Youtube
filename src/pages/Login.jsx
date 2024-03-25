import React from "react";
import LoginCom from "../auth/LoginCom";
import Sidebar from "../components/Sidebar";

const Login = () => {
  return (
    <div className="bg-gray-800 w-[100vw]">
      <Sidebar/>
      <div className="pl-[0.0em] mt-4 md:pl-[0em]">
        <LoginCom />
      </div>
    </div>
  );
};

export default Login;
