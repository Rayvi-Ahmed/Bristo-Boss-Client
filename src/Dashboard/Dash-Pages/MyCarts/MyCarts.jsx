import React from 'react';
import useCart from '../../../Shared/Hook/useCart/useCart';
import { FaTrash } from 'react-icons/fa';

const MyCarts = () => {

    const [cart]=useCart()

    console.log(cart)
    const totalCart = cart.reduce( (total, item)=>total+item.price,0)
    return (
        <div className='lg:mt-[200px] w-full mx-auto'>
            <div className='flex justify-evenly'>
                <h1 className='text-2xl font-semibold'>Total Items : {cart.length}</h1>
                <h1 className='text-2xl font-semibold'>Total Price : ${totalCart} AUD.</h1>
               <div className="btn seccendery">Pay</div>
            </div>
{/* Table Here  */}

<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
     SL.
        </th>
        <th>Item Name </th>
        <th>Price</th>
        <th>Delete </th>
       
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
    cart.map((item,i)=><tr key={item._id}>
        
    <th>
      <td>{i+1}</td>
    </th>
    <td>
      <div className="flex items-center gap-3">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={item.image} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
        <div>
          <div className="font-bold">{item.name}</div>
    </div>
      </div>
    </td>
    
    <td>$ {item.price}</td>
    <th>
    
      <td className='cursor-pointer'>
      <FaTrash className='text-red-500 text-2xl
        '>
        <button className="btn btn-ghost btn-xs"></button>
        </FaTrash>
      </td>
       
    </th>
  </tr>)



      }
    

    </tbody>

    
  </table>
</div>



        </div>
    );
};

export default MyCarts;