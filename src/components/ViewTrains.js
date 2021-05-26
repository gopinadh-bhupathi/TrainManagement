import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
export default function Mybookings(){
var userInfo=JSON.parse(sessionStorage.getItem("info"));
const [trains,setTrains]=useState(null);
useEffect(() => fetch("http://localhost:8081/Train/trains/listallTrainDetails/",{
    method: "GET",
    headers: {"Content-Type":"application/json",
               "Authorization":"Bearer " + userInfo.token   }
}).then((response)=>response.json()).then((x)=>x.length&&setTrains(x)),[userInfo.id, userInfo.token])

  const remove=(id)=>{
    fetch("http://localhost:8081/Train/trains/deleteTrain/"+id,{
    method: 'DELETE',
    headers: {
        "Content-Type":'application/json',
        "Accept": 'application/json',
        "Access-Control-Allow-Origin": '*',
        "Authorization":"Bearer "+userInfo.token
    }
}
)
window.location.reload();

    }
  return(
      trains?<div>  <NavBar/>  {trains.map((train)=>(
<div key={train.trainNo} className="post">
<div >
<table class="table">
<thead class="thead-light">
<tr>
<th>Train NO</th>
<th>Train Name</th>
<th>Boarding Station</th>
<th>Destination Station</th>
<th>Fare</th>
<th>Seats</th>
</tr>
</thead>
<tbody>
<tr>
<td>{train.trainNo}</td>
  <td>{train.trainName}</td>
  <td>{train.src}</td>
  <td>{train.dest}</td>
  <td>{train.fare}</td>
  <td>{train.noOfSeats}</td>
  <td><Link to={"/edit/"+train.trainNo}>Edit</Link></td>
 <td>{<button  onClick={()=>remove(train.trainNo)}>Delete Train</button>}</td>
</tr>
</tbody>
</table>
</div>    
</div>
))}</div>:<div><NavBar/><h2>Sorry No Trains to display</h2></div>
      
  )
}