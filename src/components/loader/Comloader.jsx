import React from "react";
import { Oval } from "react-loader-spinner";

const Comloader = () => {
  return (
    <div className="fixed top-[60px] inset-0 flex justify-center text-center w-[100vw]  z-50 mt-14">
      {" "}
      <Oval
        visible={true}
        height="50"
        width="150"
        color="red"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Comloader;
