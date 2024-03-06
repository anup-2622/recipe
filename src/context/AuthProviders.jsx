import React, { useContext, createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

const AuthProviders = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    const storedToken = sessionStorage.getItem("token");
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);

      const decodedToken = jwtDecode(storedToken);
      if (decodedToken.exp * 1000 < Date.now()) {
        // Token has expired, perform logout
        logout();
      }
    }
  }, []);
 

  const login = (userData, authToken) => {
    setUser(userData);
    setToken(authToken);
    sessionStorage.setItem("user", JSON.stringify(userData));
    sessionStorage.setItem("token", authToken);
  };

  const logout = () => {
    setToken(null);
    setUser(null);

    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
  };

  const isAuthenticated = () => {
    return !!user && !!token;
  };

  return (
    <AuthContext.Provider
      value={{ token, user, login, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProviders, AuthContext };
