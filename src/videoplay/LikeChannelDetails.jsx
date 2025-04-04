import React, { useState } from "react";
import { AiOutlineLike, AiOutlineFileAdd } from "react-icons/ai";
import { LuUserPlus2 } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ButtonLoader from "../components/ButtonLoader";

const LikeChannelDetails = ({ owner = {} }) => {
  const navigate = useNavigate();
  const { likescount = 0, isLike } = owner;

  const [likes, setLikes] = useState(likescount);
  const [isloading, setIsloading] = useState(false);

  const handleLikes = async (videoId) => {
    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/api/v1/${
        isLike ? "unlikedvideo" : "likedvideo"
      }/${videoId}`;

      const response = isLike ? await axios.delete(url) : await axios.post(url);

      if (response.status === 201 || response.status === 200) {
        setLikes((prev) => (isLike ? prev - 1 : prev + 1));
      }
    } catch (error) {
      console.error("Error handling likes:", error);
    }
  };

  const handleSavePlayList = async (videoId) => {
    setIsloading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/create-playlist/${videoId}`
      );
      console.log(res.data);
      setIsloading(false);
    } catch (error) {
      console.log(error);
      setIsloading(false);
    }
  };

  return (
    <div className="w-full mt-2 border-2 px-1 text-white pb-2 md:px-4">
      {/* head */}
      <div className="flex justify-between px-1 py-2 ">
        <div className="text-[1.5vh]">
          <h1 className=" text-xl md:text-[2em] font-bold">{owner.title}:</h1>
          <p className="text-gray-200">{owner.views} Views ·18 hours ago</p>
        </div>
        <div className="flex gap-2 mb-0 items-center   justify-center md:mb-3">
          <div className="flex h-6">
            <button
              onClick={() => handleLikes(owner._id)}
              className="border px-2 py-4   text-xl text-center  flex items-center gap-1 rounded"
            >
              {
                <AiOutlineLike
                  className={`text-2xl ${
                    owner.isLike ? "text-blue-500" : "text-white"
                  }`}
                />
              }{" "}
              {likes}
            </button>
          </div>
          <div onClick={() => handleSavePlayList(owner._id)} className="">
            <button className="bg-white flex items-center justify-center gap-1 text-black mt-3 py-1 px-4 rounded">
              {<AiOutlineFileAdd />} {isloading ? <ButtonLoader /> : "save"}
            </button>
          </div>
        </div>
      </div>
      {/* middle part */}
      <div className="flex justify-between px-1 mb-4">
        <div className="flex gap-1">
          <img
            onClick={() =>
              navigate(`/otherprofile/${owner.owners[0].username}`)
            }
            className="rounded-[50%] border w-12 h-12 cursor-pointer"
            src={owner.owners[0].avatar}
            alt="logo"
          />
          <div className="flex flex-col gap-0 mt-1">
            <h4>{owner.owners[0].fullName}</h4>
            <p className="text-[1.5vh] text-gray-200">
              {owner.owners[0].subscriberCount} Subscribers
            </p>
          </div>
        </div>

        <div className="">
          <button className="btn btn-sub bg-[#AE7AFF] gap-1 text-black font-bold ml-2 px-2 py-2 flex items-center">
            {<LuUserPlus2 className="text-2xl " />}{" "}
            {owner.isSubscribed ? "Subscribed" : "Subscribe"}
          </button>
        </div>
      </div>
      {/* end part descriptions */}
      <div className="w-full">
        <hr className="mt-2" />
        <details className="text-[1.2vh] px-2">
          <summary>🚀 {owner.description}:</summary>
          <p>
            Whether you're a seasoned developer or just starting out, this
            series is designed to elevate your React skills to the next level.
          </p>
        </details>
      </div>
      {/* comments part */}
      <div></div>
    </div>
  );
};

export default LikeChannelDetails;
