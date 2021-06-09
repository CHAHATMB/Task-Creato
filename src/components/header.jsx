import React, { useState } from "react"
import BorderColorTwoToneIcon from '@material-ui/icons/BorderColorTwoTone';
import Zoom from '@material-ui/core/Zoom';
import AlarmAddTwoToneIcon from '@material-ui/icons/AlarmAddTwoTone';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Login from "./login";
import Signup from "./signup";
import Clock from "./clock";
import NotesArea from "./notesArea";
import {Card, Form,Button,Navbar} from 'react-bootstrap'





function Heading(){

    const [page, setPage]=useState("./index")

    
    
    return( 

    <Router>
    <div>
        <nav>
        <Zoom in = "true"><header className="nameOfApp">
     <ul>
         <li className="linav"><Link   to="/login"><h3>Signin</h3></Link></li>
         <li className="linav"><Link to="/signUp"><h3>Signup</h3></Link> </li>
         <li className="linav">  <Link to ="/clock"><h3>Reminder</h3></Link></li>
         <li className="linav"><Link to = "/notes"><h3>Notes</h3></Link></li>
         
     </ul>
        

        </header></Zoom>
        </nav>
        <switch>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/signUp">
                <Signup/>
            </Route>
            <Route path="/clock">
                <Clock/>
            </Route>
            <Route path="/notes">
                <NotesArea/>
            </Route>
            
        </switch>
    </div>
    </Router>);
        
       
       
    
}

export default Heading;