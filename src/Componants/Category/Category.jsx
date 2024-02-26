
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

// Image Import for slide ///
import image1 from "../../assets/home/slide1.jpg"
import image2 from "../../assets/home/slide2.jpg"
import image3 from "../../assets/home/slide3.jpg"
import image4 from "../../assets/home/slide4.jpg"
import image5 from "../../assets/home/slide5.jpg"
import SectionTitle from '../SectionTitle/SectionTitle';


const Category = () => {
    return (
    <section>

      <SectionTitle
      SubTitle={'---Open 10:00am to 11:00pm---'}
      heading={'order offline'}
      ></SectionTitle>
          <Swiper
        slidesPerView={4}
        autoplay={true}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='absolute'><img src={image1} alt="swiper-image" />
        <h2 className='relative bottom-10 text-center 
        text-2xl text-white
        uppercase'>Salad</h2>
        </SwiperSlide>

        <SwiperSlide className='absolute'><img src={image2} alt="swiper-image" />
        <h2 className='relative bottom-10 text-center 
        text-2xl text-white
        uppercase'>pizza</h2>
        </SwiperSlide>

        <SwiperSlide className='absolute'><img src={image3} alt="swiper-image" />
        <h2 className='relative bottom-10 text-center 
        text-2xl text-white
        uppercase'>Soup</h2>
        </SwiperSlide>

        <SwiperSlide className='absolute'><img src={image4} alt="swiper-image" />
        <h2 className='relative bottom-10 text-center 
        text-2xl text-white
        uppercase'>deasert</h2>
        </SwiperSlide>

        <SwiperSlide className='absolute'><img src={image5} alt="swiper-image" />
        <h2 className='relative bottom-10 text-center 
        text-2xl text-white
        uppercase'>Continantal</h2>
        </SwiperSlide>

      </Swiper>
    </section>
    );
};

export default Category;