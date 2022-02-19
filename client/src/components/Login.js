import React from "react";
import { useState } from "react";
import Axios from "axios";

function Login(){

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [loginStatus, setLoginStatus] = useState("")
    
    const login = () => {
        Axios.post('http://localhost:3001/api/login', {
            userName: userName,
            password: password,
        }).then((response)=>{
            if(response.data.message){
                setLoginStatus(response.data.message);
            }else{
                setLoginStatus(response.data[0].userName)
            }
        });
    }
    return(
        <React.Fragment>
            <h1>LogIn</h1>
            <label>User Name</label>
            <input type = "text" placeholder="UserName" onChange={(e)=>{
                setUserName (e.target.value)}}/>
            <label>Password</label>
            <input type = "password" placeholder="Password" onChange={(e)=>{
                setPassword (e.target.value)}}/>
            <button onClick={login}>LogIn</button>
            <h2>{loginStatus}</h2>
        </React.Fragment>  
    )
}
export default Login