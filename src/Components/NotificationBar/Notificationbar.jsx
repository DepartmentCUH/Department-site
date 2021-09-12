import React from 'react';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';


const EventBar = (props) => {
    return (
        <div style={{backgroundColor:"#636E72"}} className="hidden lg:block  mt-1 mx-1  rounded">
        <div className="text-center text-white text-lg p-2 b border-b-2">Notifications &nbsp;
           <NotificationsActiveIcon/>
           </div>
           <div style={{backgroundColor:"#C4C4C4",height:"306px"}}></div>
            <div style={{backgroundColor:"#636E72"}}  className="text-right text-white text-sm p-1 ">More
            <NavigateNextIcon />
            </div>

            
        </div>
       
       
       
      
    
    
    );
}

export default EventBar;
