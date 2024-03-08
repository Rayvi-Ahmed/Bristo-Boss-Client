import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';



import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';


const Testimonial = () => {

const [review,setReview]=useState([])

useEffect(()=>{

    fetch('http://localhost:5000/review')
    .then(res=>res.json())
    .then(data=>setReview(data))

},[])


    return (
      <section className='my-20'>
    
    
    <SectionTitle
    SubTitle={'Check review out'}
    heading={'Testimonial'}

    ></SectionTitle>

    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
    {
        review.map(rvw=><SwiperSlide
        key={rvw._id}
        >

            <div className='m-24 flex flex-col items-center'>
                <Rating
                style={{ maxWidth: 10 }}
            
                value={rvw.rating}
                readOnly
                />
                  <p className='text-sm text-slate-800'>{rvw.details}</p>
                <h1 className='text-2xl text-orange-500'>{rvw.name}</h1>
            </div>


        </SwiperSlide>)
    }
        
  
      </Swiper>
      </section>
    );
};

export default Testimonial;