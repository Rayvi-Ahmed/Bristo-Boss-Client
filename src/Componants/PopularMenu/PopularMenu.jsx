import React, { useEffect, useState } from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import SectionTitle from '../SectionTitle/SectionTitle';

const PopularMenu = () => {
    const [menus,setMenus]=useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            const popularMenu=data.filter(item=>item.category==='popular')
            setMenus(popularMenu)
        })
    },[])

    return (
      <section className='mb-6'>
        <SectionTitle
        SubTitle={'Check it Out'}
        heading={'From our menu'}
        >      
        </SectionTitle>

        <div className='grid grid-cols-2 gap-10'>

{
    menus.map(item=><MenuItem
    key={item._id}
    item={item}
    ></MenuItem>)
}

</div>
<div className='my-4 text-center'>
    <button className='tex-yellow-600 px-5 py-3 rounded-lg bg-slate-200 border border-b-yellow-500 hover:bg-slate-700 hover:text-yellow-600'>See All</button>
</div>

      </section>
    );
};

export default PopularMenu;