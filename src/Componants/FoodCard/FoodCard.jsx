import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useCart from '../../Shared/Hook/useCart/useCart';
import useAxiosSecure from '../../Shared/Hook/useAxiosSecure/useAxiosSecure';

const FoodCard = ({item}) => {
  const {user}=useContext(AuthContext)
  const axiosSecure=useAxiosSecure()
  const {price,image,recipe,name,_id}=item
  const navigate = useNavigate()
  const [,refetch]=useCart()


  const handleAddToCart=(food)=>{

    console.log(food)
    

  if(user && user.email){
//  Cart add to Data base 

    const cartItem={
      menuId:_id,
      email:user.email,
      image,
      price,
      name
    }

   axiosSecure.post('/carts',cartItem)
    .then(res=>{
      console.log(res.data)


      if(res.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title:`${name} has been added `,
          showConfirmButton: false,
          timer: 1500
        });

     

      }

      refetch()
    })

  }else{

    Swal.fire({
      title: "Please Login first to buy food",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "login Now"
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login')
    
      }
    });
  }
  console.log(item)

}

    return (
        <div className="card w-auto bg-base-100 rounded-none shadow-xl hover:scale-105 duration-500">
        <figure><img  src={image} alt="Shoes" /></figure>
     
        <div className="card-body flex flex-col gap-1 items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>handleAddToCart(item)} className="btn text-yellow-500 bg-slate-100 border border-b-yellow-600 text-center">Order Now</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;