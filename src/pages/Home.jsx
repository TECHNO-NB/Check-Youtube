import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

const Home = () => {
  const [data, setData] = useState([]);

  const notifyE = (msg) => toast.error(msg);
  const notifyS = (msg) => toast.success(msg);
  const items = useSelector((state) => state.user);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://ytbackend-awfu.onrender.com/api/v1/getallvideos`
        );
        setData(response.data.data);
      
        
      } catch (error) {
        notifyE("500 Error While Fetching Data...");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-800  w-[100vw]">
      <Sidebar />
      <div className="pl-[0.0em] grid grid-cols-1 w-[80vw] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   md:gap-x-[18em] md:pl-[16.5em]">
        {data.length > 0 &&
          data.map((videoData) => (
            <VideoCard key={videoData._id} data={videoData} />
            
          ))}

      </div>
    </div>
  );
};

export default Home;
