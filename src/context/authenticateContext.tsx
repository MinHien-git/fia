import React, { Context, useState } from "react";
import { User_Interface, AuthContextType } from "../interfaces/app_interfaces";

export const AuthContext = React.createContext<AuthContextType | null>(null);

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState<User_Interface | undefined>(undefined);
  const logout = () => {
    if (auth) {
      setAuth(undefined);
    }
  };

  const login = (user: User_Interface) => {
    setAuth(user);
  };

  return (
    <AuthContext.Provider value={{ auth, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
}
