import React, { createContext, useState } from "react";
export const AuthContext=createContext()
export const AuthProvider=({children})=>{
    const [isAuth,setisAuth]=useState(false)
    const [data, setData] = useState("")
    const login=()=>{
     setisAuth(true)
     fetch("https://reqres.in/api/login",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
           "email": "eve.holt@reqres.in",
           "password": "cityslicka"
       })
    }).then(r=>r.json()).then(d=>{
        console.log(d)
        setData(d)
    
       
    })
    console.log(data)
     
    }
    const logout=()=>{
        setisAuth(false)
        
       


       
       
    }

    return (
        <AuthContext.Provider value={{login,isAuth,logout,data}}>
                {children}
        </AuthContext.Provider>
    )
}
