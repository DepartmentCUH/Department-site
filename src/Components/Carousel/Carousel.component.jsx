import React from 'react';
import Image1 from '../../assets/1.jpg';
import Image2 from '../../assets/2.jpg';
import Image3 from '../../assets/3.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const CarouselComponent = () => {
    return (
        <div className="mt-1 w-full h-full lg:w-9/12 lg:h-6/12 mx-1">
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
            
        </div>
    );
}

export default CarouselComponent;
