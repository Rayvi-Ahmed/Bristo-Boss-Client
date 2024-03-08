import React from 'react';

const FoodCard = ({item}) => {

const {price,image,recipe,name}=item

    return (
        <div className="card w-auto bg-base-100 rounded-none shadow-xl hover:scale-105 duration-500">
        <figure><img  src={image} alt="Shoes" /></figure>
     
        <div className="card-body flex flex-col gap-1 items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn text-yellow-500 bg-slate-100 border border-b-yellow-600 text-center">Order Now</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;