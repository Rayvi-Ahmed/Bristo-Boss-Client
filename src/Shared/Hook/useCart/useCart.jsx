

import { useContext } from 'react';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';


const useCart = () => {
    const {user}=useContext(AuthContext)

   const axiosSecure=useAxiosSecure()
   const {refetch,data:cart=[]}=useQuery({

    queryKey:['cart',user?.email], 
    queryFn:async()=>{
        const res= await axiosSecure.get(`/carts?email=${user.email}`)
        return res.data
    }
   })

   return[cart,refetch]


};

export default useCart;