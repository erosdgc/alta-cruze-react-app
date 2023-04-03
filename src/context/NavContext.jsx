import React, { useState } from "react";
import { createContext } from "react";

export const NavContext = createContext();

export const NavProvider = ( {children} ) => {
  const [sidebar, setSidebar] = useState(false);
  
  const altSidebar = () => setSidebar(!sidebar);
  const showSidebar = () => setSidebar(true);
  const closeSidebar = () => setSidebar(false);

  return (
    <NavContext.Provider
      value={{
        sidebar,
        altSidebar,
        showSidebar,
        closeSidebar,
      }}
    >
        {children}
    </NavContext.Provider>
  );
};