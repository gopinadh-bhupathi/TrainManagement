import React, { useEffect, useState } from "react";

  
import {
	Navbar,
	Nav,
	NavDropdown
} from "react-bootstrap";

function NavBar()
{
   var x,admin;
	const [loggedIn,setloggedIn]=useState(false);
	function y(){
   sessionStorage.getItem("info")?setloggedIn(true):setloggedIn(false);
	}
    loggedIn?x=JSON.parse(sessionStorage.getItem("info")):x=null;
    loggedIn?admin=x.roles.includes("ROLE_ADMIN"):admin=false;
	useEffect(
		()=>y()
	)
	const logout=()=>{
		setloggedIn(false);
        sessionStorage.removeItem("Log");
		sessionStorage.removeItem("info");
		}
    return(
<div>

<Navbar collapseOnSelect expand="lg" className="nav-color"  variant="dark">
    <Navbar.Brand className="brandStyle" href="/">PAKISTHAN RAILWAYS</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto ">
        <Nav.Link style={{color:"white"}} href="/hp">HOME</Nav.Link>
            <Nav.Link style={{color:"white"}} href="/search">SEARCH</Nav.Link>
            <Nav.Link style={{color:"white"}} href="/contact">CONTACT US</Nav.Link>
            {loggedIn&&  <Nav.Link style={{color:"white"}} href="/hp" onClick={()=>logout()}>Logout</Nav.Link>}
            {!loggedIn&&  <Nav.Link style={{color:"white"}} href="/login" >LOGIN</Nav.Link>}
            {!loggedIn&&  <Nav.Link style={{color:"white"}} href="/register" >REGISTER</Nav.Link>}
            {loggedIn&&<NavDropdown title="My Account" id="basic-nav-dropdown">
                <NavDropdown.Item href="/profile">
                   MY PROFILE
                </NavDropdown.Item>
                <NavDropdown.Item href="/mybookings">MY BOOKINGS</NavDropdown.Item>
            </NavDropdown>
            }
             {admin&&<NavDropdown title="Admin Operations" id="basic-nav-dropdown" >
                <NavDropdown.Item href="/add">
                   ADD TRAIN
                </NavDropdown.Item>
                <NavDropdown.Item href="/manage">MANAGE TRAINS</NavDropdown.Item>
            </NavDropdown>
            }
        </Nav>
        
    </Navbar.Collapse>
</Navbar>

</div>


    );
}

export default NavBar;



