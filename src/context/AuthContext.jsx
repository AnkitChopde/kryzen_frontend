import React, { createContext, useState } from 'react'

export const authContext = createContext();

const AuthContext = ({children}) => {
    const [isAuth,setIsAuth] = useState({
        auth:false,
        token:null
    });

    const handlelogin = (token)=>{
        console.log(token)
        setIsAuth({
            ...isAuth,
            auth:true,
            token
        })
    }

    const handlelogout = ()=>{
        setIsAuth({
            ...isAuth,
            auth:false,
            token:null
        })
    }

  return ( <authContext.Provider value={{isAuth,handlelogin,handlelogout}}>
    {children}
  </authContext.Provider>
    
  )
}

export default AuthContext
