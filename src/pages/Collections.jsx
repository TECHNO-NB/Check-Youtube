import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import Comloader from "../components/loader/Comloader";

const Collections = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/get-playlist`
        );

        setData(res.data.message);
        setLoader(false);
      } catch (error) {
        console.log(error);
        setLoader(false);
      } finally {
        setLoader(false);
      }
    };
    fetchData();
  }, []);
  
  return (
    <div className="bg-gray-800 w-[100vw]">
      <Sidebar />
      <div className="pl-[0.0em] mt-4 md:pl-[17em]">
        <h1 className="text-white text-4xl font-bold">Collections</h1>
       
        {loader ?
         <Comloader/> :
        <div className="mt-4 text-white ">
          {data.map((val, index) => (
            <div className="flex gap-4 mt-2   border-2" key={val._id}>
              <img className="w-40" src={val.videos.thumbnail} />
              <div>
                <h1 className="text-white text-sm mt-4 uppercase">
                  {val.videos.title}
                </h1>
                <div className="flex gap-2">
                  <p>{val.videos.views} Views</p>
                  <p>44 minutes</p>
                </div>
                <p className="text-sm "> {val.owner.fullName}</p>
              </div>
            </div>
          ))}
        </div>
        }
      </div>
    </div>
  );
};

export default Collections;
