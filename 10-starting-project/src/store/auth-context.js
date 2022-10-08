import React,{useState,useEffect} from "react";
import { createContext } from "react/cjs/react.production.min";

const AuthContext = createContext({
    isLoginIn:false,
    onLogout:()=>{},
    onLogin:(email,password)=>{}
})

export const AuthContextProvider=(props)=>{
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const loginHandler = ()=>{
        localStorage.setItem("isLogin","1");
        setIsLoggedIn(true);
    }
    const logoutHandler = ()=>{
        localStorage.removeItem("isLogin");
        setIsLoggedIn(false);
    }
    useEffect(()=>{
        const storedLoginInformation = localStorage.getItem("isLogin");
        if(storedLoginInformation === "1"){
          setIsLoggedIn(true);
        }
      },[]);
    
    return <AuthContext.Provider 
                value={{
                isLoggedIn:isLoggedIn,
                onLogout:logoutHandler,
                onLogin:loginHandler
                }}
            >
                {props.children}
            </AuthContext.Provider>
}
export default AuthContext;