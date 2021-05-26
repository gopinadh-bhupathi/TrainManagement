import React,{useState,useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import styles from '../css/search.css';

export default function Search(){
    const [src,setsrc]=useState("");
    const [dest,setdest]=useState("");
    const [trains,setTrains]=useState([]);
    const [user,setUser]=useState(null);
    const [loggedIn,setLoggedIn]=useState(false);
    var x=null;
    function y(){
      sessionStorage.getItem("info")?setLoggedIn(true):setLoggedIn(false);
      loggedIn?x=JSON.parse(sessionStorage.getItem("info")):x=null
     }
     useEffect(
       ()=>y()
     )
    const search=(e)=>{
      
        e.preventDefault();
    fetch("http://localhost:8084/search",{
        method: "POST",
        headers: { "Content-Type":'application/json',
        "Accept": 'application/json',
        "Access-Control-Allow-Origin": '*'},
        body: JSON.stringify({"src":src,"dest":dest})
    }).then((response)=>response.json()).then((x)=>setTrains(x))}
    return(
        


                <div class="body2">

                   <head>
      <link rel="stylesheet" href="../css/search.css"></link>
      </head>
      <div>
        <NavBar />
      </div>

      <aside id="sidebar">
      <div class="dark">              
<form  onSubmit={search}>
  
              <div className="search-box">
                <label>Source</label><br />
                <select name="src" id="Source" onChange={(e)=>setsrc(e.target.value)}>
                <option value="none">None</option>
             <option value="karachi">Karachi</option>
             <option value="hyderabad">Hyderabad</option>
             <option value="multan">Multan</option>
             <option value="quetta">Quetta</option>
             <option value="islamabad">Islamabad</option>
             <option value="bahawalpur">Bahawalpur</option>
</select><br />
            
        
              </div>
              <div className="search-box">
                <label>Destination</label><br />
                <select name="dest" id="Destination" onChange={(e)=>setdest(e.target.value)}>
                <option value="none">None</option>
                <option value="karachi">Karachi</option>
             <option value="hyderabad">Hyderabad</option>
             <option value="multan">Multan</option>
             <option value="quetta">Quetta</option>
             <option value="islamabad">Islamabad</option>
             <option value="bahawalpur">Bahawalpur</option>
</select><br />
<button class="button_1" type="submit" >Search</button>
      
              </div>
              
     
               
  
            </form>
            </div>
            </aside>



                {trains.map((post)=>(
            <div key={post.trainNo} className="post">
  
  <table class="content-table">
  <thead>
    <tr>
      <th>TRAIN NO</th>
      <th>TRAIN NAMME</th>
      <th>FAIR</th>
      <th>NO OF TICKETS</th>
      <th>BOOK NOW</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{post.trainNo}</td>
      <td>{post.trainName}</td>
      <td>{post.fare}</td>
      <td>{post.noOfSeats}</td>
      <td><button class="button">{loggedIn && <Link to={"/booking/"+post.trainNo}>BookNow</Link>}</button></td>
    </tr>
   
    
  </tbody>
</table>
   

     

  
</div>    
 

))}
   
        </div>
        
    );
}