import React from 'react';


const MenuItem = ({item}) => {

    const {name,price,recipe,image}=item

    return (
        <div>
            <div className='flex space-x-5'>
                <img src={image} style={{borderRadius:"0 200px 200px"}} className='w-[100px]' alt="" />
                <div>
                    <h1 className='text-2xl uppercase'>{name} ----------</h1>
                    <p>{recipe}</p>
                </div>
                <p className='text-yellow-600'>${price}</p>
            </div>

         

        </div>
    );
};

export default MenuItem;