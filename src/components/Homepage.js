
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import {credentialsContext} from '../App';
import {useContext} from 'react';
import Home from './Home';
import Landingpage from "./Landingpage";
import NavBar from "./NavBar";
import style from '../css/homepage.css';
function Homepage(){

  const [credentials,setCredentials]=useContext(credentialsContext);
  const [loggedIn,setloggedIn]=useState(false);
	function y(){
   sessionStorage.getItem("info")?setloggedIn(true):setloggedIn(false);
   
	}
	useEffect(
		()=>y()
	)


    return (
      <div>
      <div className="Homepage">
 
        
       <NavBar/>
        
          </div>
          <section id="showcase">
      <div class="container">
         
        <div class="image1">
         
        </div>
        
        </div>
         
     </section>
     <div class="blocks">
     <div class="serv_out">
            <div class="serv_box" >
                 
                <div class="txtn_box"><p class="ttl">Special Trains</p><p class="phra">Enjoy booking IRCTC air-conditioned Special trains with EaseMyTrip without any hassle.</p></div>
                <div class="go_box"><img src="https://www.easemytrip.com/Content/Train/img/iconservice/rightarrow.svg"></img></div>
            </div>

            <div class="serv_box">
                 
                <div class="txtn_box"><p class="ttl">Live Station</p><p class="phra">Get a complete list of trains that shall be arriving at the railway station of your choice at the time selected by you.  </p></div>
                <div class="go_box"><img src="https://www.easemytrip.com/Content/Train/img/iconservice/rightarrow.svg"></img></div>
            </div>

            <div class="serv_box">
                 
                <div class="txtn_box"><p class="ttl">Hygienic Food</p><p class="phra">Get to know the Live Status of Indian railway train and delays, if any.</p></div>
                <div class="go_box"><img src="https://www.easemytrip.com/Content/Train/img/iconservice/rightarrow.svg"></img></div> 
            </div>

        </div>
        <div class="serv_out">
            <div class="serv_box" >
                 
                <div class="txtn_box"><p class="ttl">Accomodation</p><p class="phra">Check the PNR Status of your assigned railway ticket. Enter your PNR number to get the same.</p></div>
                <div class="go_box"><img src="https://www.easemytrip.com/Content/Train/img/iconservice/rightarrow.svg"></img></div>
            </div>

            <div class="serv_box">
                 
                <div class="txtn_box"><p class="ttl">Seat Calendar</p><p class="phra">Check the 4-month seat availability in your desired train through the seat Calendar </p></div>
                <div class="go_box"><img src="https://www.easemytrip.com/Content/Train/img/iconservice/rightarrow.svg"></img></div>
            </div>

            <div class="serv_box">
                 
                <div class="txtn_box"><p class="ttl">24*7 Customer Service</p><p class="phra">Get to know the Live Status of Indian railway train and delays, if any.</p></div>
                <div class="go_box"><img src="https://www.easemytrip.com/Content/Train/img/iconservice/rightarrow.svg"></img></div>
            </div>

        </div>
        </div>
        <footer>
        <p>Pakisthan Railway Services, Copyright &copy; 2021 </p>
      </footer>
        
     
        
          </div>
          );
}
export default Homepage;



