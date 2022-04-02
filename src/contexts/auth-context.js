import { createContext, useContext, useState } from "react";

const CreateAuth = createContext({ user: null, token: null });

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ user: null, token: null });

  return (
    <CreateAuth.Provider value={{ user, setUser }}>
      {children}
    </CreateAuth.Provider>
  );
};

export const useAuth = () => useContext(CreateAuth);
