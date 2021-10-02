import React from 'react';
import Navbar1 from '../Navbar/Navbar1.component';
import Footer from '../Footer/Footer';
const Eventpage = () => {
    return (
        <div>
           <Navbar1 />
            <div className="text-black text-5xl text-center font-bold pt-2">
                Events
            </div>
            <div className="flex justify-center " >
                    <div className="h-1.5 w-1/12 mt-3" style={{backgroundColor:"#636E72"}}></div>
            </div>
            <div style={{height:"500px"}} >

            </div>
           <Footer/>
            
        </div>
    );
}

export default Eventpage;
