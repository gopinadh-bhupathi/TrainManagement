
import {Link} from "react-router-dom";
import React, {useState,useContext} from "react";
import { useHistory } from "react-router-dom";
import {credentialsContext} from '../App';
import NavBar from "./NavBar";
import style from '../css/login.css';

 
const url="http://localhost:8081"
function Loginpage(){
    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const [error,seterror]=useState("");
    const history=useHistory("");
    const [,setCredentials]=useContext(credentialsContext);
const Login=(e)=>{
        e.preventDefault();
    fetch(url+"/api/auth/signin",{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({username,password})
    })
    .then(handleErrors)
    .then((data)=>{
      setCredentials(data)
        sessionStorage.setItem("info",JSON.stringify(data));
        sessionStorage.setItem("Log",true);
        console.log("Login Successful");
        history.push("/hp");
    })
 .catch((error)=>{seterror(error.message)});
    }

     

    return (
      <html> 
        <div className="Homepage">
        <Link to="/trainmanagement"></Link>
        
       <NavBar/>
        
          </div>


   <head>
   <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <link rel="stylesheet" href="style.css" />
  <title>Login Form Demo</title>
   </head>
  
 

<div class="body1">
  <div class="login-wrapper">
    
    <form onSubmit={Login} class="form">
      <img src="images/avatar.png" alt="" />
       
      <h2>Login</h2>
      <div class="input-group">
        <input type="text" name="username" id="username" onChange={(e)=>setusername(e.target.value)} required="" />
        <label for="loginUser">User Name</label>
      </div>
      <div class="input-group">
        <input type="password" name="password" id="password"  onChange={(e)=>setpassword(e.target.value)} required="" />
        <label for="loginPassword">Password</label>
      </div>
      <input type="submit" value="Login" class="submit-btn" />
      <a href="#forgot-pw" class="forgot-pw">Forgot Password?</a>
    </form>
    
    

    <div id="forgot-pw">
      <form action="" class="form">
        <a href="#" class="close">&times;</a>
        <h2>Reset Password</h2>``
        <div class="input-group">
          <input type="email" name="email" id="email" required />
          <label for="email">Email</label>
        </div>
        <input type="submit" value="Submit" class="submit-btn" />
      </form>
      </div>
    </div>
  </div>
   



         
       </html>
          );
}

export const handleErrors= async (response)=>{
    if(!response.ok){
        const {message} = await response.json();
        throw Error(message);
    }
    return response.json();
}
export default Loginpage;



