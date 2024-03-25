import React, { useState } from "react";
import { createContext } from "react";

export const showhidesidebar = createContext();

const GlobalContext = ({children} ) => {
  const [open, setOpen] = useState(true);

  return <showhidesidebar.Provider value={{open,setOpen}}>
    {children}
  </showhidesidebar.Provider>;
};

export default GlobalContext;
