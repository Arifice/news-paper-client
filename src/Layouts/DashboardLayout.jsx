import { NavLink, Outlet } from "react-router-dom";
import { MdArticle, MdSubscriptions } from "react-icons/md";
import { FaAd, FaCartPlus, FaHistory, FaHome, FaList, FaUsers } from "react-icons/fa";
import useAdmin from "../Hooks/useAdmin";
import BreakingNews from "../Pages/Home/BreakingNews";
import { HiDocumentAdd } from "react-icons/hi";
import { MdManageAccounts } from "react-icons/md";
import { FcApprove } from "react-icons/fc";

const DashboardLayout = () => {
    // TODO:
    const [isAdmin]=useAdmin();
    return (
        <div className="flex">
            {/* Dashboard side bar */}
            <div className="w-72 min-h-screen bg-cyan-600">
                <ul className="menu">

                    {
                        isAdmin?  <>
                            {/* for admin */}
                            <li><NavLink to={'/dashboard/adminhome'} className=' lg:text-2xl'><FaHome></FaHome>Admin Home</NavLink></li>
                            <li><NavLink to={'/dashboard/allusers'} className=' lg:text-2xl'><FaUsers></FaUsers>All User</NavLink></li>
                            <li><NavLink to={'/dashboard/addpublisher'} className=' lg:text-2xl'><HiDocumentAdd></HiDocumentAdd>Add Publisher</NavLink></li>                            
                            <li><NavLink to={'/dashboard/managepublisher'} className=' lg:text-2xl'><MdManageAccounts></MdManageAccounts> Publisher</NavLink></li>                            
                            <li><NavLink to={'/dashboard/paymenthistory'} className=' lg:text-2xl'><FaHistory></FaHistory> Payment History</NavLink></li>                            
                            <li><NavLink to={'/dashboard/approvearticles'} className=' lg:text-2xl'> <FcApprove></FcApprove> Approve Articles</NavLink></li>                            
                            
                            
                            </>
                        :<>
                         {/* for all user */}
                            <li><NavLink to={'/dashboard/userprofile'} className=' lg:text-2xl'><FaHome></FaHome>User Profile</NavLink></li>
                            <li><NavLink to={'/dashboard/userhome'} className=' lg:text-2xl'><FaHome></FaHome>User Home</NavLink></li>
                            <li><NavLink to={'/dashboard/userpaymenthistory'} className=' lg:text-2xl'><FaHistory></FaHistory> Payment History</NavLink></li> 
                            
                           
                            
                        
                        </>
                    }                    
                     
                               

                   {/* common */}

                   <li><NavLink to={'/'} className=' lg:text-2xl'><FaHome></FaHome> Home</NavLink></li>
                   
                    <li><NavLink to={'/dashboard/myarticles'} className=' lg:text-2xl'><MdArticle></MdArticle>My Articles</NavLink></li>
                    <li><NavLink to={'/dashboard/subscription'} className=' lg:text-2xl'><MdSubscriptions></MdSubscriptions> Subscription</NavLink></li>
                    <li><NavLink to={'/dashboard/addarticles'} className=' lg:text-2xl'><FaAd></FaAd> Add Articles</NavLink></li>
                    <li><NavLink to={'/dashboard/premiumarticles'} className=' lg:text-2xl'><FaList></FaList> Premium Articles</NavLink></li>
                    <li><NavLink to={'/dashboard/mycart'} className=' lg:text-2xl'><FaCartPlus></FaCartPlus>My Cart</NavLink></li>

                </ul>

            </div>
            {/* Dashbord content */}
            <div className="flex-1">
            <BreakingNews></BreakingNews>
                <Outlet></Outlet>
                
            </div>
            
        </div>
    );
};

export default DashboardLayout;