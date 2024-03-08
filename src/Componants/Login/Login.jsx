import React, { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';



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
        <div className="hero min-h-screen bg-base-200">

            {/* Image / Information */}
        <div className="hero-content flex-col md:flex-row p-3">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et  in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>



         {/* form LOgin  */}
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-yellow-500">
        
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>

              {/* Captha start */}
              <div className="form-control">
              <LoadCanvasTemplate />
                <input  type="text" ref={capthcaRef} name='captcha' placeholder="Type above text" className="input input-bordered mb-2 rounded-none" required />
                <button onClick={handleCaptcha} className="btn btn-outline btn-info btn-xs">Validate</button>
        
              </div>
              <div className="form-control mt-6">
                <button disabled={disable} className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;