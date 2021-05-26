import React , {useEffect, useState} from 'react'
import { Link, useHistory } from "react-router-dom";
import NavBar from "./NavBar";
function EditTrain(props) {
    var userInfo=JSON.parse(sessionStorage.getItem("info"));

    const [trainName,setTrainName]=useState("")
    const [src, setSrc]=useState("")
    const[dest,setDest]=useState("");
    const[fare,setFare]=useState("");
    const[seats,setSeats]=useState();
    
       var item={
        "trainNo":props.match.params.id,
        "trainName":trainName,
        "src":src,
        "dest":dest,
        "fare":fare,
        "noOfSeats":seats
       
        }
        
       const Edit = (id)=>{
        id.preventDefault();   
        fetch("http://localhost:8081/Train/trains/updateTrain", {
            method: 'PUT',
            body: JSON.stringify(item),
            headers: {
                "Content-Type":'application/json',
                "Accept": 'application/json',
                "Access-Control-Allow-Origin": '*',
                "Authorization":"Bearer "+ userInfo.token
            }
        })
    
}

return (
    <div>
        <NavBar/>
        <div id="booking" class="section">
    <div class="section-center">
        <div class="container">
            <div class="row">
                <div class="booking-form">
                    <div class="form-header">
                        <h1>Edit Train</h1>
                    </div>
                    <form onSubmit={Edit}>
                        
        
                        <div class="form-group"> <input type = "text" required  onChange={(e)=>setTrainName(e.target.value)} className="form-control" placeholder="Train Name"/><span class="form-label">Train Name :</span> </div>
                        <div class="row">
                            <div class="col-md-6">
                            <div class="form-group"> <input type = "text" required  onChange={(e)=>setSrc(e.target.value)} className="form-control" placeholder="Source"/><span class="form-label">Source :</span> </div>
                            </div>
                        </div>
                       
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group"> <input type = "text" required  onChange={(e)=>setDest(e.target.value)} className="form-control" placeholder="Destination" /> <span class="form-label">Destination : </span> </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">   <input type = "text" required  onChange={(e)=>setFare(e.target.value)} className="form-control" placeholder="Fare" /> <span class="form-label">Fare : </span> </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">   <input type = "number" required  onChange={(e)=>setSeats(e.target.value)} className="form-control" placeholder="Seats" /> <span class="form-label">Seats : </span> </div>
                            </div>
                        </div>
                        <div class="form-btn"> <button className="btn btn-primary">Edit</button> </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
)
}


export default EditTrain;
