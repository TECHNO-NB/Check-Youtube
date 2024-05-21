import React from "react";
import { ProgressBar } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className=" w-[100vw] h-[100vh] flex items-center justify-center text-2xl text-center text-white">
      <ProgressBar
        visible={true}
        height="200"
        width="200"
        color="red"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;
