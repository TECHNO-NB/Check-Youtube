import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Comloader from "../components/loader/Comloader";

const Subscribers = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoader(true);
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/api/v1/allsubscribers/shdj857858669`
        );

        setLoader(false);
        setData(res.data.data);
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

      <div className="pl-[0.0em] text-white mt-4 md:pl-[17em]">
        <h1 className="text-white text-4xl font-bold">
          Total Subscribers '{data.length}'
        </h1>

        {loader ? (
          <Comloader />
        ) : (
          data.map((val) => {
            return (
              <div
                className="flex gap-2 rounded-md mt-2 bg-gary-800 border-2 lg:w-[30%]"
                key={val._id}
              >
                <img
                  onClick={() =>
                    navigate(`/otherprofile/${val.subscriberDetails.username}`)
                  }
                  className="border-4 cursor-pointer"
                  src={val.subscriberDetails.avatar}
                  width={50}
                  height={50}
                />
                <div className="div">
                  <h1>{val.subscriberDetails.username}</h1>
                  <h1>{val.subscriberDetails.email}</h1>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Subscribers;
