import React , {useEffect, useState} from 'react'
import { Link, useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import style from '../css/addtrain.css';

function AddTrain() {
    var userInfo=JSON.parse(sessionStorage.getItem("info"));
    const [No,setNo]=useState("")
    const [trainName,setTrainName]=useState("")
    const [src, setSrc]=useState("")
    const[dest,setDest]=useState("");
    const[fare,setFare]=useState("");
    const[seats,setSeats]=useState();
    
       var item={
        "trainNo":No,
        "trainName":trainName,
        "src":src,
        "dest":dest,
        "fare":fare,
        "noOfSeats":seats
       
        }
        
       const Add = (e)=>{
        e.preventDefault();   
        fetch("http://localhost:8081/Train/trains/addTrain", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type":'application/json',
                "Accept": 'application/json',
                "Access-Control-Allow-Origin": '*',
                "Authorization":"Bearer "+ userInfo.token
            }
        })
        console.log(item);
}

return (

    <div class="body3">
    <div>
        <NavBar/>

        </div>
        <div>
        <aside id="sidebar1"> 
        <div class="dark1">
        <h3>ADD TRAIN</h3>
        <form onSubmit={Add}>
        <div>
            <label>TRAIN NO</label><br />
            <input type="text" placeholder="TRAIN NO" required  onChange={(e)=>setNo(e.target.value)} />
            </div>

            <div>
          <label>TRAIN NAME</label><br />
          <input type="text" placeholder="TRAIN NAME" required  onChange={(e)=>setTrainName(e.target.value)} />
        </div>
        <div>
        <label>SOURCE</label><br />
          <input type="text" placeholder="Source" onChange={(e)=>setSrc(e.target.value)}/>
        </div>
        <div>
        <label>DESTINATION</label><br />
          <input type="text" placeholder="Destination" onChange={(e)=>setDest(e.target.value)} />
        </div>
        <div>
        <label>FARE</label><br />
          <input type="number" placeholder="fare" onChange={(e)=>setFare(e.target.value)} />
        </div>
        <div>
        <label>NO OF SEATS</label><br />
          <input type="number" placeholder="No of seats" onChange={(e)=>setSeats(e.target.value)} />
        </div>
        <button class="button_11" type="submit">ADD</button>




        </form>

        </div>
        </aside>
        </div>

        <div class="white1">
            <p>"       "</p>
            <p>"       "</p>
            <p>"       "</p>
            <p>"       "</p>
            <p>"       "</p>
            

            <p> </p>
        </div>


        </div>
        
)
}


export default AddTrain;
