import React,{useState,useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { Button, Table, ButtonGroup} from "react-bootstrap";


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
    }).then((response)=>response.json()).then((x)=>{setTrains(x)
    console.log(x);})}
    
    
    return(

        


                 
                  <body>
                  

                   <head>
      <link rel="stylesheet" href="../css/search.css"></link>
      </head>
      <div>
        <NavBar />
      </div>
       
   
      <div className="flight__dropdowns">
          <h2>Search Trains</h2>
          <h4>Source</h4>
          <form className="flight__form" onSubmit={search}>
            <select
              id="src"
              name="src"
              className="dropdown"
              onChange={(e) => setsrc(e.target.value)}
              required
            >
              <option value="unselected">Source</option>
              <option value="karachi">Karachi</option>
               
              <option value="hyderabad">Hyderabad</option>
              <option value="multan">Multan</option>
              <option value="quetta">Quetta</option>
              <option value="islamabad">Islamabad</option>
              <option value="bahawalpur">Bahawalpur</option>
            </select>
            <h4>Destination</h4>
            <select
              id="dest"
              name="dest"
              className="dropdown"
              onChange={(e) => setdest(e.target.value)}
              required
            >
              <option value="unselected">Destination</option>
              <option value="karachi">Karachi</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="multan">Multan</option>
              <option value="quetta">Quetta</option>
              <option value="islamabad">Islamabad</option>
              <option value="bahawalpur">Bahawalpur</option>
               
            </select>
           
            <button type="submit" className="search__btn">
              Search Flights
            </button>
          </form>
        </div>

 



                
 
 <div className="card-body">
<Table>
  <thead class="thead-light">
    <tr>
      <th scope="col">TRAIN No</th>
      <th scope="col">TRAIN NAME</th>
      <th scope="col">FARE</th>
      <th scope="col">No Of Seats</th>
      <th scope="col">BOOK NOW</th>

    </tr>
  </thead>
  <tbody>
                            {
                                trains.map(
                                    (post) => (
                                    <tr key={post.id}>
                                      
                                        <td>{post.id}</td>
                                        <td>{post.trainName}</td>
                                        <td>{post.fare}</td>
                                        <td>{post.noOfSeats}</td>
                                         
                                        
                                       <td>   <button class="button">{loggedIn && <Link to={"/booking/"+post.trainNo}>BookNow</Link>}</button>
    </td>
                                    </tr>
                                ))
                            }
                        </tbody>
   
  
   
</Table>
</div>
   

   

  </body>
  
 
 
 
        
    );
}