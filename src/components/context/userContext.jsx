import { createContext, useState } from "react";

export const userContext = createContext()

export const UserContextProvider =({children})=>{
        const [loggedInUser, setLoggedInUser] = useState(null)
        const [isLogin, setIsLogin] = useState(false)
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