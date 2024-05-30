import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import {Oval} from "react-loader-spinner"

const Home = () => {
  const [data, setData] = useState([]);
  const [loader,setLoader]=useState(false)

  const notifyE = (msg) => toast.error(msg);
  const notifyS = (msg) => toast.success(msg);
  const items = useSelector((state) => state.user);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true)
        const response = await axios.get("https://ytbackend-awfu.onrender.com/api/v1/getallvideos");
        console.log(response.data.data)
        setData(response.data.data);
        setLoader(false)
      } catch (error) {
        notifyE("500 Error While Fetching Data...");
        console.log(error)
      }
    };

    fetchData();
  }, []);

  if(loader){
    return    <div className="flex items-center justify-center h-[100vw] md:h-[30vw]" > <Oval  visible={true}
    height="50"
    width="150"
    color="red"
    ariaLabel="oval-loading"
    wrapperStyle={{}}
    wrapperClass=""
    /></div>
  }
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
