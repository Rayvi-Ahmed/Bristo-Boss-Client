import React, { useDebugValue } from 'react';
import useCart from '../../../Shared/Hook/useCart/useCart';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Shared/Hook/useAxiosSecure/useAxiosSecure';

const MyCarts = () => {

    const [cart,refetch]=useCart()
    const totalCart = cart.reduce( (total, item)=>total+item.price,0)

    const axiosSecure=useAxiosSecure()

    // DELETE OPERATION////

    const handleDelete=(id)=>{

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/carts/${id}`)
          .then(res=>{
            if(res.data.deletedCount>0){
              refetch()  

                Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
           
            }
          })
        }
      });

  
    }

    return (
        <div className=' lg:mt-[50px] w-full mx-auto'>
             <div className='flex justify-evenly mb-5'>
                <h1 className='text-2xl font-semibold'>Total Items : {cart.length}</h1>
                <h1 className='text-2xl font-semibold'>Total Price : ${totalCart} AUD.</h1>
               <div className="btn seccendery">Pay</div>
            </div>
                
                
                {/* Table Here  */}

                <div className="overflow-x-auto">
                <table className="table w-full">
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
                    <td>
                    
                    <button 
                    onClick={()=>handleDelete(item._id)}
                    className='btn btn-ghost '>
                        <FaTrash className='text-red-600 text-xl'></FaTrash>
                    </button>
                    
                    </td>
                    </tr>)

                    }
                    
                    </tbody>

                    
                </table>
                </div>

                        </div>
                    );
                };

                export default MyCarts;