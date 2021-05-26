import React from "react";
import { Container } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Booking from "./Booking";


function Landingpage()
{
   
    return(
      <div>

<div class="container">
        
          
        </div>

        <section id="showcase">
       
<div class="container">
  <h1>Pakistan Railway Welcomes You!!!</h1>
  <p>Make your travel Easy and Comfortale :)</p>
</div>
</section>

<section id="boxes">
        <div class="container">
          <div class="box">
          
            <h3>Accomodation</h3>
            <p>Book your room and make yourself home to where ever you travel</p>
          </div>

          <div class="box">
           
            <h3>Get Food</h3>
            <p>Have a hygenic and delicious food</p>

          </div>
         
        </div>
</section>





</div>
     




 
    );
}

export default Landingpage;