import React from 'react';
import Image1 from '../../assets/1.jpg';
import Image2 from '../../assets/2.jpg';
import Image3 from '../../assets/3.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const CarouselComponent = () => {
    return (
        <div className="mt-1 w-full h-full lg:w-full lg:h-full mx-1">
            <Carousel autoPlay={true} infiniteLoop={true} showIndicators={false} showStatus={false} showArrows={false} showThumbs={false}>
                <div>
                    <img src={Image1} />
                   
                </div>
                <div>
                    <img src={Image3} />
                    
                </div>
                <div>
                    <img src={Image3} />
                   
                </div>
            </Carousel>
            <div className="w-full h-full">
                <div style={{backgroundColor:"#636E72"}} className="text-center text-white p-2 text-lg mt-1 rounded">
                    About us
                </div>
                <div style={{backgroundColor:"#C4C4C4",height:"315px"}} className="text-justify	 rounded mt-2 pt-12 px-4" >
                <span className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
                </div>

            </div>
            
        </div>
    );
}

export default CarouselComponent;
