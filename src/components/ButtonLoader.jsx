import React from 'react';
import { Oval } from "react-loader-spinner";

const ButtonLoader = () => {
  return (
    <Oval
        visible={true}
        height="20"
        width="20"
        color="black"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
      
  )
}

export default ButtonLoader