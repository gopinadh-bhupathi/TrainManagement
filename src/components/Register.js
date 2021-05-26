
import {Link} from "react-router-dom";
import React, {useState,useContext} from "react";
import { useHistory } from "react-router-dom";
import {credentialsContext} from '../App';
import {handleErrors} from './Login';
import NavBar from "./NavBar";

const url="http://localhost:8081"
function Register(){

    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const [email,setemail]=useState("");
    const [error,seterror]=useState("");
    const history=useHistory("");
    const [,setCredentials]=useContext(credentialsContext);
    const Register=(e)=>{
        e.preventDefault();
    fetch(url+"/api/auth/signup",{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({"username":username,"email":email,"password":password,roles:["user"]})
    })
    .then(handleErrors)
    .then(()=>{
        setCredentials({username,password});
        alert("User Successfully Registered");
        //localStorage.setItem("creds",JSON.stringify({username,password}));
        history.push("/login");
    })
    .catch((error)=>{seterror(error.message)});
    }

    return (
      <html> 
      <div className="Homepage">
      <Link to="/trainmanagement"></Link>
      
     <NavBar/>
      
        </div>

         

<div class="body1">
  <div class="login-wrapper">
    
    <form onSubmit={Register} class="form">
      <img src="images/avatar.png" alt="" />
       
      <h2>REGISTER</h2>
      <div class="input-group">
        <input type="text" name="username" id="username" onChange={(e)=>setusername(e.target.value)} required="" />
        <label for="loginUser">User Name</label>
      </div>
      <div class="input-group">
      <input type="email" name="email" id="e-mail" required pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"}  onChange={(e)=>setemail(e.target.value)} required=""></input>
        <label for="loginUser">Email id</label>
      </div>
      <div class="input-group">
      <input type="text" name="password" id="password" placeholder="Password" required minLength={6}  onChange={(e)=>setpassword(e.target.value)} required=""></input>
        <label for="loginPassword">Password</label>
      </div>
      <input type="submit" value="Register" class="submit-btn" />
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
export default Register;



