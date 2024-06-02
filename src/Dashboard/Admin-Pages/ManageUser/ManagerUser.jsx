import React from 'react';
import useAxiosSecure from '../../../Shared/Hook/useAxiosSecure/useAxiosSecure';
import { useQuery } from 'react-query';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ManagerUser = () => {


    //  Fetching all Logged Users here


    const axiossecure=useAxiosSecure()


    const{data:users=[],refetch}=useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res= await axiossecure.get('http://localhost:1000/users')
            return res.data
        }
    })


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
          axiossecure.delete(`/users/${id}`)
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
        <div className='m-3'>
           <div className='flex justify-evenly text-2xl'>
            <h1>Total users : {users.length}</h1>
            <h1>User role </h1>
           </div>

           {/* User Table  */}
           <div className="overflow-x-auto mt-5">
            <table className="table w-full">
        {/* head */}
        <thead>
          <tr className='text-lg font-bold'>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Delete</th>
          </tr>
        </thead>
        
        <tbody>
          {/* row 1 */}
          {

            users.map((user,idx)=><tr
            key={user._id}
            className="bg-base-200">
            <th>{idx+1}</th>
            <td>{user.displayName}</td>
            <td>{user.email}</td>
            <td>Admin</td>
            <td>
                <button onClick={()=>handleDelete(user._id)} className='btn btn-ghost bg-red-600 rounded-full text-xl text-white'><FaTrash></FaTrash></button>
            </td>
          </tr>
    )

        
          }
        </tbody>
      </table>
    </div>


            </div>
        );
    };

    export default ManagerUser;