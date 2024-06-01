import React, { useState } from "react";
import { createContext } from "react";

export const showhidemodal = createContext();
const ModalContext = ({ children }) => {
  const [modal, setModal] = useState(false);
  return <showhidemodal.Provider value={{modal,setModal}}>{children}</showhidemodal.Provider>;
};

export default ModalContext;
