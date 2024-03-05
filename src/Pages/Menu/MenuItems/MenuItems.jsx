import React from 'react';
import Cover from '../../../Shared/Cover/Cover';
import MenuItem from '../../../Shared/MenuItem/MenuItem';

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
        </div>
    );
};

export default MenuItems; 