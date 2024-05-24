

import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';
import { useQuery } from 'react-query';




const useCart = () => {

   const axiosSecure=useAxiosSecure()

   const {data:cart=[]}=useQuery({

    queryKey:['cart'],
    queryFn:async()=>{
        const res= await axiosSecure.get('/carts')
        console.log(res)
        return res.data
    }
   })

   return[cart]


};

export default useCart;