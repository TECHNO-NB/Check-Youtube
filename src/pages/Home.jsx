import React, { useState, useEffect, useContext } from "react";
import Sidebar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import Comloader from "../components/loader/Comloader";
import { showhidemodal } from "../context/ModalContext";
import axios from "axios";
import "../index.css";

const Home = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const { modal, setModal } = useContext(showhidemodal);

  const notifyE = (msg) => toast.error(msg);
  const notifyS = (msg) => toast.success(msg);
  const user = useSelector((state) => state.login);
  const searchchar = useSelector((state) => state.search);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/getallvideos`
        );
        setData(response.data.data);
        console.log(response.data.data);
        setLoader(false);
      } catch (error) {
        notifyE("500 Error While Fetching Data...");
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const filteredVideos = searchchar
    ? data.filter((val) => val.title.toLowerCase().includes(searchchar))
    : data;

  return (
    <div className="bg-gray-800  w-full flex">
      {loader ? (
        <div className="flex items-center justify-center w-[100vw]">
          {" "}
          <Comloader />{" "}
        </div>
      ) : null}
      <Sidebar />

      <div className="videoList ml-[0em] flex-1 p-3 pb-8  md:pb-0 grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 md:ml-[15.6em] md:gap-y-0 md:gap-x-4">
        {filteredVideos.length > 0 ? (
          filteredVideos.map((videoData) => (
            <VideoCard key={videoData._id} data={videoData} />
          ))
        ) : (
          <h1 className="text-white text-center col-span-full">
            No videos found
          </h1>
        )}
      </div>
    </div>
  );
};

export default Home;
