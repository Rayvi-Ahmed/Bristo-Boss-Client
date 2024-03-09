import React, { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,validateCaptcha } from 'react-simple-captcha';
import Lottie from 'react-lottie';
import animationData from '../../assets/Animation - 1709958734719.json'
import { Link } from 'react-router-dom';




const Login = () => {
    const capthcaRef=useRef(null)

    const [disable,setDisable]=useState(true)

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])


    // Captcha Function 
    const handleCaptcha=()=>{
        const USER_CAPTCHA_VALUE=capthcaRef.current.value

        // Captcha Validation 
        if(validateCaptcha(USER_CAPTCHA_VALUE)){
            setDisable(false)
        }else{
            setDisable(true)
        }
    }

    // Form Data Fucntion 

    const handleLogin =(event)=>{
       event.preventDefault()
       const form = event.target
       const email=form.email.value;
       const password=form.password.value;

       console.log(email,password)

    }
    return (
        <div className="hero min-h-screen bg-base-200 ">
        


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
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-transparent rounded-none md:ml-10">
          <div className='py-2 w-full mx-auto'>
            <h1 className='text-center text-2xl font-bold text-slate-600 underline underline-offset-8'>LOG IN</h1>
          </div>
        
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered rounded-none" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered rounded-none" required />
            
              </div>

              {/* Captha start */}
              <div className="form-control">

              <LoadCanvasTemplate />
                <input  type="text" ref={capthcaRef} name='captcha' placeholder="Type above text" className="input input-bordered mb-2 rounded-none" required />
                <button onClick={handleCaptcha} className="btn btn-outline btn-info btn-xs rounded-none">Captcha Validate</button>
        
              </div>
              <div className="form-control mt-6">
                <button disabled={disable} className="btn btn-primary">Login</button>
              </div>

              <div className='text-center pt-2 text-slate-700'>
                <p>Are you new here ?<Link to={'/signUp'}>Please Sign Up</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;