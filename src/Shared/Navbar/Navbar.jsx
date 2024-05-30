import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { FaCartPlus } from "react-icons/fa";
import useCart from '../Hook/useCart/useCart';

const Navbar = () => {



  const {user,LogOut}=useContext(AuthContext)
  const [cart]=useCart()
  console.log(cart)

  const hanglogOut=()=>{
    LogOut()
    .then()
    .catch(error=>{
      console.log(error)
    })


  }

    const navOptions=<>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/menu'}>Our Menu</Link></li>
        <li><Link to={'/order/salad'}>Order Food</Link></li>
        <li><Link to={'/dashboard'}>Dashboard</Link></li>
        <li>
          <Link to={'/dashboard/myCart'}>
          <FaCartPlus />
          <button className="badge badge-secondary">+{cart.length}</button>
              </Link>
                </li>
    
    </>

    return (
      <div className="navbar fixed z-10 bg-black bg-opacity-30 md:w-full text-white max-w-full md:max-w-screen-lg">

      <div className="navbar-start">
        <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>  
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navOptions}
      </ul>
      </div>
    <a className="btn btn-ghost text-xl">Bristo Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navOptions}
        </ul>
      </div>

      <div className="navbar-end">

        {
          user? 
          <>
          <span className='text-gray-400 text-sm  mx-9'>{user.displayName}</span>

          <div className="avatar">
           <div className="w-10 mx-5 online rounded-full">
            <img src={user.photoURL} />
              </div>
                   </div>
          <a onClick={hanglogOut} className="btn">Log Out</a> 
        
          </>
          : <Link to={'/login'}><a className="btn">Log In</a></Link>
        }
    
      </div>
    
    </div>  
    );
};

export default Navbar;