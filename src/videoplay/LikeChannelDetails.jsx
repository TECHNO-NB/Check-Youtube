import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { AiOutlineFileAdd } from "react-icons/ai";
import { LuUserPlus2 } from "react-icons/lu";

const LikeChannelDetails = ({ owner }) => {
  const navigate = useNavigate();
  console.log("owner", owner);
  console.log(owner.owners[0].username);

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
            <button className="border px-2 py-4   text-xl text-center  flex items-center gap-1 rounded">
              {
                <AiOutlineLike
                  className={`text-2xl ${
                    owner.isLike ? "text-blue-500" : "text-white"
                  }`}
                />
              }{" "}
              {owner.likescount}
            </button>
          </div>
          <div className="">
            <button className="bg-white flex items-center justify-center gap-1 text-black mt-3 py-1 px-4 rounded">
              {<AiOutlineFileAdd />}save
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
              {owner.subscribersCount} Subscribers
            </p>
          </div>
        </div>

        <div className="">
          <button className="bg-[#AE7AFF] gap-1 text-black font-bold border-[#4F4E4E] h border-b-8 border-r-8 hover:border-b-0 hover:border-r-0 ml-2 px-2 py-2 flex items-center">
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
    </div>
  );
};

export default LikeChannelDetails;
