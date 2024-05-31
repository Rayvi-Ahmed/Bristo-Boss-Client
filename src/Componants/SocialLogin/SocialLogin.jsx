import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import {  useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {

    const {GoogleSignIn}=useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'

    const handleGoogleLogin=()=>{

        GoogleSignIn()
        .then(result=>{

            const loggedUser= result.user
            const UserbyGoogle= {name:loggedUser.displayName, email:loggedUser.email}

            fetch('http://localhost:1000/users',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(UserbyGoogle)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
                navigate(from,{replace:true})
            })

       
            
        })
       
    }

    return (
        <div>
              <div className="divider divider-primary">Social Login</div>
              <div className='text-center my-3' >
                <button onClick={handleGoogleLogin}>
                <FcGoogle className='text-3xl'></FcGoogle>
                </button>
              </div>
        </div>
    );
};

export default SocialLogin;