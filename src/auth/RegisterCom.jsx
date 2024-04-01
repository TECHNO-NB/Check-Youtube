import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const RegisterCom = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const notifyE = (msg) => toast.error(msg);
  const notifyS = (msg) => toast.success(msg);
  return (
    <div className="h-[84vh]   mt-14  flex flex-col justify-center py-12 sm:px-6 lg:px-8 md:h-[70vh]">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-20 pt-6 pb-0 w-auto" src={logo} alt="Logo" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-purple-800">
          Register
        </h2>
      </div>

      <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-gray-800 py-0 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={(e) => loginUser(e)}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-white"
              >
                UserName
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  type="text"
                  placeholder="Enter Your Username.."
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="fullname"
                className="block text-sm font-medium text-white"
              >
                FullName
              </label>
              <div className="mt-1">
                <input
                  id="fullname"
                  type="text"
                  placeholder="Enter Your Fullname.."
                  onChange={(e) => setEmail(e.target.value)}
                  required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email.."
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="true"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  type="password"
                  autoComplete="true"
                  placeholder="Enter Your Password.."
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-white"
              >
                Profile Pic
              </label>
              <div className="mt-1">
                <input
                  id="image"
                  name="image"
                  type="file"
                  accept="image/*"
                  required
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-purple-300 rounded-md"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-white"
              >
               Cover Pic
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) => setThumbnail(e.target.files[0])}
                  id="image"
                  name="image"
                  type="file"
                  accept="image/*"
         className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-purple-300 rounded-md"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterCom;
