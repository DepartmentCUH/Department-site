import React from 'react';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import NotificationBar from '../NotificationBar/Notificationbar';

const EventBar = (props) => {
    return (
        <div className="w-4/12 hidden lg:block" >
            <div style={{backgroundColor:"#636E72"}} className="  mt-1 mx-1  rounded">
       
           <div className="text-center text-white text-lg p-2 b border-b-2">Events &nbsp;
           <EventAvailableIcon  />
           </div>
           <div style={{backgroundColor:"#C4C4C4",height:"306px"}}></div>
            <div style={{backgroundColor:"#636E72"}}  className="text-right text-white text-sm p-1 ">More
            <NavigateNextIcon  />
            </div>

        </div>
        
            
       
         <div>
          <NotificationBar/>  
        </div>
        </div>

    );
}

export default EventBar;
