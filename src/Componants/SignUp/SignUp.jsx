import React, { useContext, useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/Animation - 1709958734719.json'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

// react hook form 
import { useForm} from "react-hook-form"
import Swal from 'sweetalert2';

const SignUp = () => {

  const location =useLocation()
  const navigate= useNavigate()
  const from = location?.state?.from?.pathname || '/'

  // get Auth sign Up from Authprovider
  const {createUser,updateUserProfile}=useContext(AuthContext)

  // React hook form Meterials
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm()

// Get User data from input fill 
    const onSubmit = (data) => {
      console.log(data)
      createUser(data.email,data.password)

      .then(result=>{
          const loggedUser=result.user;
          console.log(loggedUser)

          updateUserProfile(data.name,data.photoUrl)
          
          .then(()=>{
            console.log('User Profile has been Updated')
            reset()
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
           
           navigate('/')
          })
          .catch(error=>console.log(error))


      })
    
    }

    return (

          <div className="hero  bg-base-200 ">
      
            {/* Image / Information */}
        <div className="hero-content flex-col md:flex-row p-3 gap-3 max-w-screen-lg ">
        
        {/* Lottie Animation added */}
        <Lottie
         options={{
          animationData: animationData,
          loop: true,
          autoplay: true
        }}
        width={500}
        height={500}
            
        >
        </Lottie>

         {/* form LOgin  */}
          <div className="card shrink-0 w-full min-h-screen max-w-sm shadow-2xl bg-transparent rounded-none md:ml-10">
          <div className='py-2 w-full mx-auto'>
            <h1 className='text-center text-2xl font-bold text-slate-600 underline underline-offset-8'>SIGN IN</h1>
          </div>
        
            <form onSubmit={handleSubmit(onSubmit)} className="card-body -my-5">

           
            

                <div className="form-control">
                <label className="label">
                  <span className="label-text"> Name</span>
                </label>
                <input type="text" {...register("name", { required: true})} name='name' placeholder="your last name" className="input input-bordered rounded-none" required />
                  
                  
                  {/* Error Alert  */}
                {errors.name?.type==='required'&& <span className='text-sm text-red-600 text-center'> Name fill is required !</span>}
                </div>

                {/* Photo URL  */}
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" {...register("photoUrl", { required: true})}  placeholder="Fil the photo URL" className="input input-bordered rounded-none" required />
                  
                  
                  {/* Error Alert  */}
                {errors.photoUrl?.type==='required'&& <span className='text-sm text-red-600 text-center'>Last Name fill is required !</span>}
                </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true, maxLength: 20 })} name='email' placeholder="email" className="input input-bordered rounded-none" required />
                  
                  
                  {/* Error Alert  */}
                {errors.email?.type==='required'&& <span className='text-sm text-red-600 text-center'>Email fill is required !</span>}
                </div>



                <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                
                <input type="password" 

                {...register("password", 
                { 
                  required: true, 
                  maxLength: 20,
                  minLength:8,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                }, 

                    )} name='password' placeholder="password" className="input input-bordered rounded-none" required />

                   {/* Error Alert for Password  */}


                   {errors.password?.type==='required' && <span className='text-sm text-red-600 text-center'>This fill is required</span>}

                   {errors.password?.type==='maxLength'&& <span className='text-sm text-red-600 text-center'>Password length should less 20 charecter</span>}

                   {errors.password?.type==='minLength'&& <span className='text-sm text-red-600 text-center'>Password length should minimum 8 charecter</span>}

                   {/* todo */}
            
                   {errors.password?.type==='pattern' && <span className='text-sm text-red-600 '>Password should be one uppercase one lowercase one special charecter & One number</span>}
            
              </div>

            
              <div className="form-control mt-6">
                <button className="btn btn-primary">Registered</button>
                <p className='text-center pt-2 mb-2 text-slate-700 text-sm'>You have an account ?<Link to={'/login'}>Please Sign Up</Link></p>
              </div>
              <div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;