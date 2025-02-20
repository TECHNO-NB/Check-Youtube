import React, { useContext, useState } from "react";
import { showhidemodal } from "../../context/ModalContext";

const UpoldeNavLoader = () => {
  const { modal, setModal, progress } = useContext(showhidemodal);

  return (
    <div
      className={`bg-white h-6 z-50 ${
        modal ? "flex" : "hidden"
      } items-center justify-center`}
    >
      <h1 className="text-lg font-semibold">Uploading...</h1>
      <div className="flex items-center gap-3 w-[50%] md:w-[20%]">
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          readOnly
          className="w-full accent-blue-500 cursor-pointer"
        />
        <span className="text-sm font-semibold">{progress}%</span>
      </div>
    </div>
  );
};

export default UpoldeNavLoader;
