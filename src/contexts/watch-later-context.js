import { createContext, useState, useContext } from "react";

const createWatchLater = createContext();

export const WatchLaterProvider = ({ children }) => {
  const [watchLater, setWatchLater] = useState({ watchLater: [] });

  return (
    <createWatchLater.Provider value={{ watchLater, setWatchLater }}>
      {children}
    </createWatchLater.Provider>
  );
};

export const useWatchLater = () => useContext(createWatchLater);
