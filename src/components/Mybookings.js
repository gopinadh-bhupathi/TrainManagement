import React, { useEffect, useState } from "react";

import NavBar from "./NavBar";
export default function Mybookings(){
var userInfo=JSON.parse(sessionStorage.getItem("info"));
const [myBookings,setMyBookings]=useState(null);
useEffect(() => fetch("http://localhost:8081/Booking/booking/mybookings/"+userInfo.id,{
    method: "GET",
    headers: {"Content-Type":"application/json",
               "Authorization":"Bearer " + userInfo.token   }
}).then((response)=>response.json()).then((x)=>x.length&&setMyBookings(x)),[userInfo.id, userInfo.token])

  const cancel=(id)=>{
    fetch("http://localhost:8081/Booking/booking/cancel/"+id,{
    method: 'DELETE',
    headers: {
        "Content-Type":'application/json',
        "Accept": 'application/json',
        "Access-Control-Allow-Origin": '*',
        "Authorization":"Bearer "+userInfo.token
    }
}
)

    }
  return(
      myBookings?<div>  <NavBar/>  {myBookings.map((booking)=>(
<div key={booking.mybookings._id} className="post">
<div >
<table class="table">
<thead class="thead-light">
<tr>
<th>PNR No</th>
<th>Passenger Name</th>
<th>Train NO</th>
<th>Train Name</th>
<th>Boarding Station</th>
<th>Destination Station</th>
<th>Fare</th>
</tr>
</thead>
<tbody>
<tr>
<td>{booking.mybookings._id}</td>
  <td>{booking.mybookings.name}</td>
  <td>{booking.train.trainNo}</td>
  <td>{booking.train.trainName}</td>
  <td>{booking.train.src}</td>
  <td>{booking.train.dest}</td>
  <td>{booking.train.fare}</td>
 <td>{<button  onClick={()=>cancel(booking.mybookings._id)}>Cancel Ticket</button>}</td>
</tr>
</tbody>
</table>
</div>    
</div>
))}</div>:<div><NavBar/><h2>Sorry No Bookings to display</h2></div>
      
  )
}