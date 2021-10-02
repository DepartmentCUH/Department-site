import React from 'react';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const EventBar = (props) => {
    return (
        <div style={{backgroundColor:"#636E72"}} className="hidden lg:block  mt-1 mx-1  rounded">
        <div className="text-center text-white text-lg p-2 b border-b-2">Notifications &nbsp;
           <NotificationsActiveIcon/>
           </div>
           <div style={{backgroundColor:"#C4C4C4",height:"356px"}}></div>
            <div style={{backgroundColor:"#636E72"}}  className="text-right text-white text-sm p-1 ">
            <Link to="/notification" style={{textDecoration: 'none'}} className="hover:text-white focus:text-white cursor-pointer	 ">
            More
            </Link>
            <NavigateNextIcon />
            </div>

            
        </div>
       
       
       
      
    
    
    );
}

export default EventBar;
