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
import PrivateRoute from "./PrivateRoute/PrivateRoute";

  
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
            element:<PrivateRoute>
              <Order></Order>
            </PrivateRoute>
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

    {
      path:'dashboard',
      element:<PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
  }
  ]);

  export default router;


  