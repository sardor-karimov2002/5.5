import React, { useState,useEffect } from 'react'

const Form=()=> {
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const style={
        color:"red",
        fontSize:"14px"
    }
    useEffect(() => {
        if(password==="")setError("Parol bo'sh bo'lishi mumkin emas")
        else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password))setError("Parolda katta va kichik harflar bo'lishi shart ")
        else setError("")
    }, [password]);
    
  return (
    <div>
        <input type="text" onChange={(e)=>{setPassword(e.target.value)}} name="" id="" />
        <div style={style} className="error">{error}</div>
    </div>
  )
}
export default Form;