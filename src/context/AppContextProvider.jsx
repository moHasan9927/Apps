import React, { useState, useEffect } from "react";
import AppContext from "./AppContext";

const AppContextProvider = ({ children }) => {
  const [installedApps, setInstalledApps] = useState(() => {
    const stored = localStorage.getItem("installedApps");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("installedApps", JSON.stringify(installedApps));
  }, [installedApps]);

  return (
    <AppContext.Provider value={{ installedApps, setInstalledApps }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
