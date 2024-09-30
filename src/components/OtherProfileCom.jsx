import React, { useEffect, useState, useCallback } from "react";
import { FaUserPlus } from "react-icons/fa";
import Videos from "../profileComponents/Videos";
import Playlist from "../profileComponents/Playlist";
import Tweets from "../profileComponents/Tweets";
import Subscribed from "../profileComponents/Subscribed";
import axios from "axios";

const OtherProfileCom = ({ data }) => {
  const [activeButton, setActiveButton] = useState("Videos");
  const [otherdata, setOtherdata] = useState({});

  if (!data.username) {
    return (
      <h1 className="text-center text-3xl mt-40 text-white">User Not Found</h1>
    );
  }

  const activeCheck = (buttonName) => {
    setActiveButton(buttonName);
  };

  const renderActiveComponent = () => {
    switch (activeButton) {
      case "Videos":
        return <Videos />;
      case "Playlist":
        return <Playlist />;
      case "Tweets":
        return <Tweets />;
      case "Subscribed":
        return <Subscribed />;
      default:
        return null;
    }
  };

  const addSubscriber = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}api/v1/subscriptions`,
        {
          channel: otherdata._id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      window.location.reload();
    } catch (error) {
      console.error("Error message:", error);
    }
  };
  useEffect(() => {
    const fetchOtherData = async () => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/users/userchannel/${
            data.username
          }`
        );
        setOtherdata(response.data.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchOtherData();
  }, [data.username]);

  return (
    <div className="main">
      <div className="div">
        <div className="bg-white w-[100vw] h-[16vh] rounded-[10px] md:w-[81vw] md:h-[35vh]">
          {otherdata && (
            <img
              src={otherdata.coverImage}
              alt="Cover Image"
              className="bg-contain w-full h-full"
            />
          )}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div className="w-[5em] h-[5em] ml-2 bg-white border-black border-2 rounded-full mt-[-25px] md:w-[8em] md:h-[8em] md:ml-0">
              {otherdata && (
                <img
                  className="w-full h-full rounded-full"
                  src={otherdata.avatar}
                  alt="Profile"
                />
              )}
            </div>
            <div className="mt-2 md:mt-3">
              <h1 className="text-white font-bold text-[12px] md:text-2xl">
                {otherdata.fullName}
              </h1>
              <h6 className="text-gray-300 mt-[-3px] text-[12px] md:text-[16px]">
                {`@${otherdata.username}`}
              </h6>
              <p className="text-gray-300 mt-[-0px] text-[10px] md:text-[16px]">
                {`${otherdata.subscribersCount} Subscribers · ${otherdata.channelSubscribedToCount} Subscribed`}
              </p>
            </div>
          </div>

          <div
            className="w-26 h-10 text-center gap-1 px-2 rounded-md bg-purple-600 mr-2 mt-3 md:mt-7 md:mr-[10em] flex items-center justify-center hover:bg-red-200"
            onClick={() => addSubscriber()}
          >
            <FaUserPlus />
            <button className="text-[15px] font-bold py-1 rounded-md md:text-[20px]">
              {otherdata.isSubscribed ? "Subscribed" : "Subscribe"}
            </button>
          </div>
        </div>

        <div className="flex w-[100vw] justify-around gap-2 md:w-[81vw] px-1 mt-6 border-b-2 md:px-0 text-white">
          {["Videos", "Playlist", "Tweets", "Subscribed"].map((btn) => (
            <button
              key={btn}
              onClick={() => activeCheck(btn)}
              className={`w-80 h-6 md:h-10 ${
                activeButton === btn
                  ? "bg-white text-purple-500"
                  : "text-gray-300"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>
        <div className="h-[100%] w-[100vw] mt-4 md:w-[81vw]">
          {renderActiveComponent()}
        </div>
      </div>
    </div>
  );
};

export default OtherProfileCom;
