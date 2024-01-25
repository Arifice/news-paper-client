import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AllPublisher from "../Pages/AllPublisher/AllPublisher";
import MyArticles from "../Pages/Dashboard/User/MyArticles";
import DashboardLayout from "../Layouts/DashboardLayout";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers";
import Adminhome from "../Pages/Dashboard/Admin/Adminhome";
import AddPublisher from "../Pages/Dashboard/Admin/AddPublisher";
import Subscription from "../Pages/Dashboard/Admin/Subscription";
import AddArticles from "../Pages/Dashboard/User/AddArticles";
import PremiumArticles from "../Pages/Dashboard/User/PremiumArticles";
import Userhome from "../Pages/Dashboard/User/Userhome";
import AdminRoute from "./AdminRoute";
import ManagePublisher from "../Pages/Dashboard/Admin/ManagePublisher";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>            
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
        {
          path:'/allPublisher',
          element:<AllPublisher></AllPublisher>
        }

      ]
    },
    {
      path:'/dashboard',
      element:<DashboardLayout></DashboardLayout>,
      children:[
        // all user
        {
          path:'userhome',
          element:<Userhome></Userhome>
        },
        {
          path:'myarticles',
          element:<MyArticles></MyArticles>
        },
        {
          path:'addarticles',
          element:<AddArticles></AddArticles>
        },
        {
          path:'premiumarticles',
          element:<PremiumArticles></PremiumArticles>
        },
        {
          path:'subscription',
          element:<Subscription></Subscription>
        },


        // for admin
        {
          path:'allusers',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path:'adminhome',
          element:<AdminRoute><Adminhome></Adminhome></AdminRoute>
        },
        {
          path:'addpublisher',
          element:<AdminRoute><AddPublisher></AddPublisher></AdminRoute>
        },
        {
          path:'managepublisher',
          element:<AdminRoute><ManagePublisher></ManagePublisher></AdminRoute>
        }
        
        
      ]
    }
  ]);
  export default router;