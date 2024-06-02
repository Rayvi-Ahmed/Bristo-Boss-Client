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
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ManagerItem from "../Dashboard/Admin-Pages/ManageItem/ManagerItem";
import ManagerUser from "../Dashboard/Admin-Pages/ManageUser/ManagerUser";
import AddItem from "../Dashboard/Admin-Pages/AddItem/AddItem";

  
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
      element:<PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>,
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

        },
        {
          path:'dashboard/manageitem',
          element:<ManagerItem></ManagerItem>

        },
        {
          path:'dashboard/manageuser',
          element:<ManagerUser></ManagerUser>

        },
        {
          path:'dashboard/additems',
          element:<AddItem></AddItem>

        },
        {
          path:'dashboard/managebookings',
          element:<AddItem></AddItem>

        }
      ]
      
  }
  ]);

  export default router;


  