import React from 'react';
import Banner from './Banner/Banner';
import Category from '../../Componants/Category/Category';
import BrandBanner from '../../Componants/BrandBanner/BrandBanner';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
        <div className='my-16'>
        <Category></Category>
        </div>
        <div className='my-16'>
            <BrandBanner></BrandBanner>
        </div>
            
        </div>
    );
};

export default Home;