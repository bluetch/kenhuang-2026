import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppWrapper = ({ children }) => {
  const [dataState, setDataState] = useState({});

  const setState = (data) => {
    if (typeof data === "function") {
      setDataState((prev) => ({ ...prev, ...data(prev) }));
    } else {
      Object.entries(data).forEach(([key, value]) => {
        setDataState((prev) => ({ ...prev, [key]: value }));
      });
    }
  };

  // Persist state to sessionStorage on change
  useEffect(() => {
    if (Object.keys(dataState).length > 0) {
      sessionStorage.setItem("dataState", JSON.stringify(dataState));
    }
  }, [dataState]);

  // Restore state from sessionStorage on mount
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("dataState");
      if (saved) setDataState(JSON.parse(saved));
    } catch {
      setDataState({});
    }
  }, []);

  return (
    <AppContext.Provider value={{ getState: dataState, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
