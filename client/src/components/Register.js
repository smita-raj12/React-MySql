import React, { useState } from "react";
import Axios from "axios";


function Register(){

    const [userNameReg, setUserNameReg] = useState("")
    const [passwordReg, setPasswordReg] = useState("")

    const register = () => {
        Axios.post('http://localhost:3001/api/register', {
            userName: userNameReg,
            password: passwordReg,
        }).then((response)=>{
            console.log(response)
        });
    }
    return(
        <React.Fragment>
            <h1>Register</h1>
            <label>User Name</label>
            <input type = "text" onChange={(e)=>{
                setUserNameReg (e.target.value)}}/>
            <label>Password</label>
            <input type = "password" onChange={(e)=>{
                setPasswordReg (e.target.value)}}/>
            <button onClick={register}>Register</button>
        </React.Fragment>  
    )
}
export default Register