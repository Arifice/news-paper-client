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
import Subscription from "../Pages/Dashboard/User/Subscription";
import AddArticles from "../Pages/Dashboard/User/AddArticles";
import PremiumArticles from "../Pages/Dashboard/User/PremiumArticles";
import Userhome from "../Pages/Dashboard/User/Userhome";
import AdminRoute from "./AdminRoute";
import ManagePublisher from "../Pages/Dashboard/Admin/ManagePublisher";
import DetailsArticle from "../Components/DetailsArticle";
import PrivateRoute from "./PrivateRoute";
import AllArticles from "../Pages/AllArticles/AllArticles";
import UpdateArticle from "../Pages/AllArticles/UpdateArticle";
import UpdatePublisher from "../Pages/Dashboard/Admin/UpdatePublisher";
import Payment from "../Pages/Payment/Payment";
import MyCart from "../Pages/Payment/MyCart";
import PaymentHistory from "../Pages/Dashboard/Admin/PaymentHistory";
import AproveArticles from "../Pages/Dashboard/Admin/AproveArticles";
import Profile from "../Pages/Dashboard/User/Profile";
import UserPaymentHistory from "../Pages/Dashboard/User/UserPaymentHistory";


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
          element:<PrivateRoute><AllPublisher></AllPublisher></PrivateRoute>
        },        
        {
          path:'/details/:id',
          element:<PrivateRoute><DetailsArticle></DetailsArticle></PrivateRoute>,
          loader:({params})=>fetch(`https://abc-news-server.vercel.app/articles/${params.id}`),
        },
        {
          path:'/allarticles',
          element:<PrivateRoute><AllArticles></AllArticles></PrivateRoute>          
        },


      ]
    },
    {
      path:'/dashboard',
      element:<DashboardLayout></DashboardLayout>,
      children:[
        // all user
        {
          path:'userhome',
          element:<PrivateRoute><Userhome></Userhome></PrivateRoute>
        },
        {
          path:'myarticles',
          element:<PrivateRoute><MyArticles></MyArticles></PrivateRoute>
        },
        {
          path:'addarticles',
          element:<PrivateRoute><AddArticles></AddArticles></PrivateRoute>
        },
        {
          path:'premiumarticles',
          element:<PrivateRoute><PremiumArticles></PremiumArticles></PrivateRoute>
        },
        {
          path:'subscription',
          element:<PrivateRoute><Subscription></Subscription></PrivateRoute>
        },
        {
          path:'updatearticle/:id',
          element:<PrivateRoute><UpdateArticle></UpdateArticle></PrivateRoute>,
          loader:({params})=>fetch(`https://abc-news-server.vercel.app/articles/${params.id}`)
        },
        {
          path:'payment/:id',
          element:<Payment></Payment>,
          loader:({params})=>fetch(`https://abc-news-server.vercel.app/cart/user/${params.id}`)
        },
        {
          path:'userpaymenthistory',
          element:<PrivateRoute><UserPaymentHistory></UserPaymentHistory></PrivateRoute>
        },
        {
          path:'mycart',
          element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
        },
        {
          path:'userprofile',
          element:<PrivateRoute><Profile></Profile></PrivateRoute>
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
        },
        {
          path:'updatepublisher/:id',
          element:<UpdatePublisher></UpdatePublisher>,
          loader:({params})=>fetch(`https://abc-news-server.vercel.app/publishers/${params.id}`)
        },
        {
          path:'paymenthistory',
          element:<PaymentHistory></PaymentHistory>
        },
        {
          path:'approvearticles',
          element:<AproveArticles></AproveArticles>
        }
        
        
      ]
    }
  ]);
  export default router;