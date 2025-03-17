import React, { useEffect, useState } from "react";
import axios from "axios";
const LikedVideosComp = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getlikedvideos = async () => {
      axios.defaults.withCredentials = true;
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/getlikedvideos`
      );

      setData(res.data.data);
    };
    getlikedvideos();
  }, []);

  console.log("lied data", data);

  return (
    <div>
      <h1 className="text-2xl text-white">Liked Videos</h1>

      <div className="mt-4 text-white ">
        {data &&
          data.map((val, index) => (
            <div className="flex gap-4 mt-2   border-2" key={val._id}>
              <img className="w-40" src={val?.videoDetails[0]?.thumbnail} />
              <div>
                <h1 className="text-white text-sm mt-4 uppercase">
                  {val?.videoDetails[0]?.title}
                </h1>
                <div className="flex gap-2">
                  <p>{val?.videoDetails[0]?.views} Views</p>
                  <p>44 minutes</p>
                </div>
                <p className="text-sm "> {val?.owner[0]}</p> 
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LikedVideosComp;
