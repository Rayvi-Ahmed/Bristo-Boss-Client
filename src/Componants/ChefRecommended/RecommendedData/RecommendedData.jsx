import React from 'react';

const RecommendedData = ({fd}) => {
const {name,image,recipe}=fd
    return (
        <div className="card card-compact rounded-none w-60 md:w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Food Image" /></figure>
         <div className="card-body text-center">
            <h2 className="card-title">{name}</h2>
             <p className='text-sm text-center'>{recipe}</p>
         <div className="card-actions justify-center">
        <button className="btn border border-b-yellow-600 rounded-lg hover:bg-slate-500 hover:text-yellow-600 ">ADD TO CART</button>
    </div>
  </div>
</div>
    );
};

export default RecommendedData;