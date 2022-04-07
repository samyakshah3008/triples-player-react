import { createContext, useContext, useState } from "react";

const createHistory = createContext({ history: [] });

export const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState({ history: [] });

  return (
    <createHistory.Provider value={{ history, setHistory }}>
      {children}
    </createHistory.Provider>
  );
};

export const useHistory = () => useContext(createHistory);
