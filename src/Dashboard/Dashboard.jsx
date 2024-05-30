
import { FaCalendarAlt, FaHome, FaList, FaMoneyBill, FaShoppingCart,} from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import { FadeLoader, PuffLoader } from 'react-spinners';
import { FaBookBookmark, FaHouseMedicalCircleCheck, FaSpoon } from 'react-icons/fa6';
import { GiStarsStack } from 'react-icons/gi';

const Dashboard = () => {

  const {user,loading}=useContext(AuthContext)
  console.log(user,loading)

    return (
        <div className='flex'>
          <div className='w-64 min-h-screen  bg-orange-500'>

            <div className='w-32 mx-auto'>

            {
              user&& <h1 className='p-2 text-lg font-mono font-bold'>Hello Bro {user.displayName} !!</h1>
            }

            {
              loading&& <div className="sweet-loading">
             
            
              <FadeLoader
            
                loading={loading}
                color='#7d3c76'
                size={180}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>

              
            }

            {user&&
              <div className='w-50% mx-auto'>
                <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={user.photoURL} />
              </div>
            </div>
              </div>
            }

    
            <h1 className='text-xl text-center font-bold underline text text-green-800  p-2'>Dashboard</h1>
            </div>
           
            <ul className='menu'>
                <li><NavLink to="/"><FaHouseMedicalCircleCheck></FaHouseMedicalCircleCheck>User Home</NavLink>
                </li>
                <li><NavLink to="dashboard/reservation"><FaCalendarAlt></FaCalendarAlt>Reservation</NavLink>
                </li>
                <li><NavLink to="dashboard/mypayment"><FaMoneyBill></FaMoneyBill>Payment Status</NavLink>
                </li>
                <li><NavLink to="dashboard/myCart"><FaShoppingCart></FaShoppingCart>My Cart</NavLink>
                </li>
                <li><NavLink to="dashboard/review"><GiStarsStack></GiStarsStack>Add Review</NavLink>
                </li>
                <li><NavLink to="dashboard/mybooking"><FaBookBookmark></FaBookBookmark>My Booking</NavLink>
                </li>

                <div className="divider divider-neutral">Main Menu</div>

                <li><NavLink to="/"><FaHome></FaHome>Home</NavLink>
                </li>
                
                <li><NavLink to="/order"><FaSpoon></FaSpoon>Order</NavLink>
                </li>
                
                <li><NavLink to="/menu"><FaList></FaList>Food Menu</NavLink>
                </li>
                
            </ul>
          </div>

          <div className='flex-1'>
            <Outlet></Outlet>

            {
              loading&& <div className='w-70 m-16 text-center'>
              
              <PuffLoader
            
              loading={loading}
              color='#918c91'
              size={180}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
              
              </div>
            }
          </div>
        </div>
    );
};

export default Dashboard;