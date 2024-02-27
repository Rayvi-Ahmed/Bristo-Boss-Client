
import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import RecommendedData from './RecommendedData/RecommendedData';

const ChefRecommended = () => {
const [item,setItem]=useState([])


useEffect(()=>{
  fetch('menu.json')
  .then(res=>res.json())
  .then(data=>{

    const recommendedData=data.filter(food=>food.category==='recom') 
    setItem(recommendedData)
  })
},[])

  return (
   <section className='mb-10 max-w-screen-lg mx-auto'>
<SectionTitle
SubTitle={'Check it out'}
heading={'Chef Recommended'}

></SectionTitle>
<div className='flex flex-col md:flex-row gap-3'>

  {
    item.map(fd=>(
      <RecommendedData
      key={fd._id}
      fd={fd}
      ></RecommendedData>
    ))
  }
</div>

   </section>
  );
};

export default ChefRecommended;
