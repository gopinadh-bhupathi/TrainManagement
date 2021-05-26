import React , {useEffect, useState} from 'react'
import { Link, useHistory } from "react-router-dom";
import NavBar from "./NavBar";
function Booking(props) {
    var userInfo=JSON.parse(sessionStorage.getItem("info"));
    const [name,setName]=useState("")
    const [age,setAge]=useState("")
    const [gender, setGender]=useState("")
    const[quota,setQuota]=useState("");
    const[creditNo,setCreditNo]=useState("");
    const[bName,setbName]=useState("");
    const[tClass,settClass]=useState("");
    let history = useHistory();
     const [traindetails,settraindetails]=useState();

      
    var items=[];
       var item={
            "trainNo":props.match.params.id,
            "name":name,
            "gender":gender,
            "age":age,
            "quota":quota,
            "creditNo":creditNo,
            "bankName":bName,
            "tclass":tClass,
            "quota":quota,
            "username":userInfo.id
        }
        items.push(item)
       const book = (e)=>{
        e.preventDefault();   
        fetch("http://localhost:8081/Booking/booking/addPassenger", {
            method: 'POST',
            body: JSON.stringify(items),
            headers: {
                "Content-Type":'application/json',
                "Accept": 'application/json',
                "Access-Control-Allow-Origin": '*',
                "Authorization":"Bearer "+ userInfo.token
            }
          
        })
        console.log(items);
        alert("User booked Successfully");
        history.push("/hp");
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
                        <h1>Make your reservation</h1>
                    </div>
                    <form onSubmit={book}>
                        <div class="form-group"> <input type = "text" required  onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Passenger Name"/><span class="form-label">Passenger Name :</span> </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group"> <input type = "number" required  onChange={(e)=>setAge(e.target.value)} className="form-control" placeholder="Age" /> <span class="form-label">Age</span> </div>
                            </div>
                        </div>
                        <div class="row">
                           
                            <div class="col-md-4">
                                <div class="form-group"> <select class="form-control" onChange={(e)=>settClass(e.target.value)}>
                                        <option value="" selected hidden>Train class</option>
                                        <option>1st</option>
                                        <option>2nd</option>
                                        <option>3rd</option>
                                        <option>General</option>
                                    </select> <span class="select-arrow"></span> <span class="form-label">Train Class</span> </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group"> <select class="form-control" onChange={(e)=>setQuota(e.target.value)} required>
                                        <option value="" selected hidden>Quota</option>
                                        <option>General</option>
                                        <option>Ladies</option>
                                    </select> <span class="select-arrow"></span> <span class="form-label">Quota</span> </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group"> <select class="form-control" onChange={(e)=>setGender(e.target.value)} required>
                                        <option value="" selected hidden>Gender</option>
                                        <option>Female</option>
                                        <option>Male</option>
                                        <option>Transgender</option>
                                    </select> <span class="select-arrow"></span> <span class="form-label">Gender</span> </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group"> <input type = "text" required  onChange={(e)=>setCreditNo(e.target.value)} className="form-control" placeholder="name" /> <span class="form-label">Credit Card No</span> </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">   <input type = "text" required  onChange={(e)=>setbName(e.target.value)} className="form-control" placeholder="" /> <span class="form-label">Bank Name</span> </div>
                            </div>
                        </div>
                        <div class="form-btn"> <button className="btn btn-primary">Book Now</button> </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
)
}


export default Booking
