import { createContext, useContext, useState } from "react";

const createLike = createContext({ like: [] });

export const LikeProvider = ({ children }) => {
  const [like, setLike] = useState({ like: [] });

  return (
    <createLike.Provider value={{ like, setLike }}>
      {children}
    </createLike.Provider>
  );
};

export const useLike = () => useContext(createLike);
