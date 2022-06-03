import React, { useContext } from 'react'
import { AuthContext } from '../contextApi/AuthContext'

export const Navbar = () => {
  const {isAuth,login,logout}=useContext(AuthContext)
  const HandleClick1=()=>{
   logout()
  }
  const HandleClick2=()=>{
    login()
  }

  return (
    <>
    
     <div  style={{position:"sticky",boxShadow:"10px 20px 10px rgba(0.5,0,0,0.1)",width:"100%",height:"70px",top:"0"}}>
     <div><p style={{fontSize:"20px",marginLeft:"20px"}}>Home</p></div>
       {isAuth?
       <button onClick={HandleClick1} style={{padding:"20px 50px",fontSize:"20px",borderRadius:"10px",display:"block",margin:"auto",top:"0px"}}>LogOut</button>:""}
       {isAuth?"":
       <button onClick={HandleClick2}  style={{padding:"20px 50px",fontSize:"20px",borderRadius:"10px",display:"block",margin:"auto",top:"0px"}}>LogIN</button>}
     </div>
     </>
  )
}
