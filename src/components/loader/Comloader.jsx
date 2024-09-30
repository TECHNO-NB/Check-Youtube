import React from 'react'
import {Oval} from "react-loader-spinner"

const Comloader = () => {
  return (
    <div className="flex items-center justify-center h-[80vh] w-[100vw] text-center md:h-[30vw]" > <Oval  visible={true}
    height="50"
    width="150"
    color="red"
    ariaLabel="oval-loading"
    wrapperStyle={{}}
    wrapperClass=""
    /></div>
  )
}

export default Comloader