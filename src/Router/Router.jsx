import {
    createBrowserRouter,
  } from "react-router-dom";

import Main from "../Componants/Main/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Componants/Login/Login";
import SignUp from "../Componants/SignUp/SignUp";
import Dashboard from "../Dashboard/Dashboard";
import MyCarts from "../Dashboard/Dash-Pages/MyCarts/MyCarts";
import Reservation from "../Dashboard/Dash-Pages/Reservation/Reservation";
import Mybooking from "../Dashboard/Dash-Pages/Mybooking/Mybooking";
import MyPayment from "../Dashboard/Dash-Pages/MyCarts/MyPayment/MyPayment";
import Review from "../Dashboard/Dash-Pages/Review/Review";

  
const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/menu',
            element:<Menu></Menu>
        },
      
        {
            path:'order/:category',
            element:
              <Order></Order>
           
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'signUp',
            element:<SignUp></SignUp>
        }
      
      ]
     
    },

    // DASHBOARD ALL ROUTES HERE ////////////

    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
      
        {
          path:'dashboard/myCart',
          element:<MyCarts></MyCarts>

        },
        {
          path:'dashboard/mypayment',
          element:<MyPayment></MyPayment>

        },
        {
          path:'dashboard/reservation',
          element:<Reservation></Reservation>

        },
        {
          path:'dashboard/review',
          element:<Review></Review>

        },
        {
          path:'dashboard/mybooking',
          element:<Mybooking></Mybooking>

        }
      ]
      
  }
  ]);

  export default router;


  