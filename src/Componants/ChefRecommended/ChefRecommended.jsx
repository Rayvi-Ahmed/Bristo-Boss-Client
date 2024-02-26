import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import saladImages from '../../../src/assets/home/slide2.jpg'

const ChefRecommended = () => {
    return (
       <section>
<SectionTitle
SubTitle={'should try'}
heading={'chef recommended'}
></SectionTitle>

<div className='mb-10'>
    <div className='flex flex-row items-center gap-8 mx-auto'>
        
      <div className='w-[200px] lg:w-[350px] bg-gray-100 shadow-lg'>
      <img src={saladImages} className='mx-auto h-[30%] lg:w-full p-3' alt="" />
        <div className='flex flex-col gap-2 text-center p-3'>
            <h3 className='uppercase text-slate-600 font-bold'>Caser Salad</h3>
            <p className='text-sm text-slate-600'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <button className='border border-b-4 rounded-lg border-b-yellow-600 p-3 text-yellow-600'>ADD TO CART</button>
        </div>

      </div>
      <div className='w-[200px] lg:w-[350px] bg-gray-100 shadow-lg'>
      <img src={saladImages} className='mx-auto h-[30%] lg:w-full p-3' alt="" />
        <div className='flex flex-col gap-2 text-center p-3'>
            <h3 className='uppercase text-slate-600 font-bold'>Caser Salad</h3>
            <p className='text-sm text-slate-600'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <button className='border border-b-4 rounded-lg border-b-yellow-600 p-3 text-yellow-600'>ADD TO CART</button>
        </div>

      </div>
      <div className='w-[200px] lg:w-[350px] bg-gray-100 shadow-lg'>
      <img src={saladImages} className='mx-auto h-[30%] lg:w-full p-3' alt="" />
        <div className='flex flex-col gap-2 text-center p-3'>
            <h3 className='uppercase text-slate-600 font-bold'>Caser Salad</h3>
            <p className='text-sm text-slate-600'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <button className='border border-b-4 rounded-lg border-b-yellow-600 p-3 text-yellow-600'>ADD TO CART</button>
        </div>

      </div>
     

    </div>
</div>
       </section>
    );
};

export default ChefRecommended;