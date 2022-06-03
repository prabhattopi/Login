import React, { useContext } from 'react'
import { AuthContext } from '../contextApi/AuthContext'
import "./Login.css"
export const Login = (props) => {
  const {data:{token},isAuth}=useContext(AuthContext)
 
  return (
    <>
  { isAuth?<div   style={{marginTop:'30px',fontSize:"19px"}}>Your Token Number Is:-----::<span className='Daro' style={{letterSpacing:"1.4",fontSize:"30px",color:"red"}}>{token}</span></div>:""

  }
 </>
  )
}
