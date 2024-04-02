import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

const Home = () => {
  const [data, setData] = useState([]);

  const notifyE = (msg) => toast.error(msg);
  const notifyS = (msg) => toast.success(msg);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/getallvideos"
        );
        setData(response.data.data);
      } catch (error) {
        notifyE("500 Error While Fetching Data...");
      }
    };

    fetchData();
  }, []);
  console.log(Cookies.get("refreshToken"))

  return (
    <div className="bg-gray-800 w-[100vw]">
      <Sidebar />
      <div className="pl-[0.0em] md:pl-[16.5em]">
        {data.length > 0 &&
          data.map((videoData) => (
            <VideoCard key={videoData._id} data={videoData} />
          ))}
      </div>
    </div>
  );
};

export default Home;
