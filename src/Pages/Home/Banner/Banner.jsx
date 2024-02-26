import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// iMPOORT BANNER IMAGES
import image1 from '../../../assets/home/Banner-01.jpg'
import image2 from '../../../assets/home/Banner-02.jpg'
import image4 from '../../../assets/home/Banner-04.jpg'



const Banner = () => {
    return (
        <Carousel autoPlay={true}>
        <div>
        <img src={image1}/>
        </div>
        <div>
        <img src={image2}/>
        </div>

        <div>
        <img src={image4}/>
        </div>
        
    </Carousel>
    );
};

export default Banner;