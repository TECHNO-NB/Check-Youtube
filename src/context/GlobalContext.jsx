import React, { useState } from "react";
import { createContext } from "react";

export const showhidesidebar = createContext();

const GlobalContext = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [modal, setModal] = useState(true);

  return (
    <showhidesidebar.Provider value={{ open, setOpen,modal,setModal }}>
      {children}
    </showhidesidebar.Provider>
  );
};

export default GlobalContext;
