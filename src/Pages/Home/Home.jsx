import React from 'react';
import Banner from './Banner/Banner';
import Category from '../../Componants/Category/Category';
import BrandBanner from '../../Componants/BrandBanner/BrandBanner';
import PopularMenu from '../../Componants/PopularMenu/PopularMenu';
import ContactBanner from '../../Componants/ContactBanner/ContactBanner';
import ChefRecommended from '../../Componants/ChefRecommended/ChefRecommended';
import Fetured from '../../Componants/Fetured/Fetured';
import Testimonial from '../../Componants/Testimonial/Testimonial';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>

            <Helmet>
                <title>Bristo Boss| Home</title>
            </Helmet>


           <Banner></Banner>
        <div className='my-16'>
        <Category></Category>
        </div>
        <div className='my-16'>
            <BrandBanner></BrandBanner>
        </div>

        <PopularMenu></PopularMenu>
        <ContactBanner></ContactBanner>
        <ChefRecommended></ChefRecommended>
        <Fetured></Fetured>
        <Testimonial></Testimonial>
            
        </div>
    );
};

export default Home;