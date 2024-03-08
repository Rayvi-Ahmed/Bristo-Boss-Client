import React from 'react';
import Cover from '../../../Shared/Cover/Cover';
import MenuItem from '../../../Shared/MenuItem/MenuItem';
import { Link } from 'react-router-dom';

const MenuItems = ({items,image,title}) => {

    console.log('this is menu',items)


    return (
            <div className='py-16'>
          {title && <Cover  img={image} title={title}></Cover>} 
           
            <div className='grid grid-cols-2 gap-10 mt-20'>

    {
       items.map(item=><MenuItem
        key={item._id}
        item={item}
        ></MenuItem>)
    }
    </div>


            <Link className='flex items-center' to={`/order/${title}`}>
            <button className='btn border border-b-yellow-500 uppercase'>Order Now</button>
            </Link>
        </div>
    );
};

export default MenuItems; 