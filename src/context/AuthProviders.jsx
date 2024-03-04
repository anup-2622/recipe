import React , {useContext , createContext, useState  } from 'react'
const AuthContext = createContext();
 const AuthProviders = ({children}) => {

    const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);


  const login = (token, user) => {
    setToken(token);
    setUser(user);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

    

    return (
    <AuthContext.Provider value={{token , user , login , logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export {AuthProviders , AuthContext};

