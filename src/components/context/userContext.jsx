import { createContext, useEffect, useState } from "react";

export const userContext = createContext()

export const UserContextProvider =({children})=>{
        const [loggedInUser, setLoggedInUser] = useState(null)
        const [isLogin, setIsLogin] = useState(false)
        useEffect(()=>{
            const storedUser = localStorage.getItem("user")
            if(storedUser){
                setLoggedInUser( JSON.parse(storedUser))
            }
        },[])
    const value = {
          loggedInUser,
          setLoggedInUser,
          isLogin,
          setIsLogin
    }
    return(
        <userContext.Provider value={value}>
            {children}
        </userContext.Provider>
    )
}