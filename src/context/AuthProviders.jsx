import React , {useContext , createContext, useState, useEffect  } from 'react'


const AuthContext = createContext();
export const AuthProviders = ({children}) => {

    
    const [user , setUser] = useState(null);

    useEffect(()=>{
        const token = localStorage.getItem('token');
        // console.log(token);

        if(token){
            const decodedUser = decodeToken(token)
            setUser(decodedUser)
        }
    },[])
    
    const login = (token) => {
        // Perform authentication logic
        const decodeUser = decodeToken(token)
        setUser(decodeUser)
        localStorage.setItem('token',token)
      };
      const logout = () => {
        // Perform logout logic
        setUser(null);
        localStorage.removeItem('token')
    };

    const decodeToken = (token) =>{
        // return decodeUser
    }
    
    const isAuthenticate = ()=>{
        return !!user;
    }

    const value ={
        user , login , logout , isAuthenticate
    }

    return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

// export default AuthProviders

export const useAuth = () => useContext(AuthContext);