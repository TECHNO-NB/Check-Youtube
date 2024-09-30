import React from "react";
import { Oval } from "react-loader-spinner";

const Comloader = () => {
  return (
    <div className="fixed left-[35%] sm:left-[50%] items-center justify-center w-[100vw] mt-40  text-center">
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
