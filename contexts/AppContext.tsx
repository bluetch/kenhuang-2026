import { createContext, useContext, useEffect, useState } from "react";

interface AppContextValue {
  getState: Record<string, any>;
  setState: (data: Record<string, any> | ((prev: Record<string, any>) => Record<string, any>)) => void;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [dataState, setDataState] = useState<Record<string, any>>({});

  const setState = (data: Record<string, any> | ((prev: Record<string, any>) => Record<string, any>)) => {
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
