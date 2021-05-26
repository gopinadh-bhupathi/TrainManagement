import logo from './logo.svg';
import React from "react";
import {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ViewTrains from './components/ViewTrains';
import Booking from './components/Booking';
import Homepage from './components/Homepage';
import AddTrain from './components/AddTrain';

import Login from './components/Login';
import Register from './components/Register';
import Mybookings from './components/Mybookings';
import Profile from './components/Profile';
import Search from './components/Search';
import Landingpage from './components/Landingpage';
import Contact from './components/Contact';

import Home from './components/Home';
import EditTrain from './components/EditTrain';
import Search2 from './components/Search2';
import PayPal from './components/PayPal';
import Profile2 from './components/Profile';

export const credentialsContext=React.createContext();
function App() {
  const credentialsState=useState();
  const [checkout, setCheckOut] = useState(false);
  return (
    <div className="App">
      
       
    
      
      <credentialsContext.Provider value={credentialsState}>
      <Router>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/mybookings">
            <Mybookings />
          </Route>
          <Route exact path="/booking/:id" component={Booking}></Route>
          <Route exact path="/edit/:id" component={EditTrain}></Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/search">
            <Search />
          </Route>

          <Route path="/hp">
            <Homepage />
          </Route>

          <Route path="/profile2">
            <Profile2 />
          </Route>


          <Route path="/register">
            <Register />
          </Route>
          <Route path="/landingpage">
            <Landingpage />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        
          <Route path="/hp">
            <Homepage />
          </Route>
        
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/add">
            <AddTrain />
          </Route>
          <Route path="/manage">
            <ViewTrains />
          </Route>

          <Route path="/search2">
            <Search2 />
          </Route>
        </Switch>







    </Router>
    </credentialsContext.Provider>
</div>

  );
}

export default App;
