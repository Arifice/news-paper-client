import { NavLink, Outlet } from "react-router-dom";
import { MdArticle, MdSubscriptions } from "react-icons/md";
import { FaAd, FaHome, FaList, FaUsers } from "react-icons/fa";
import useAdmin from "../Hooks/useAdmin";
import { SiAffinitypublisher } from "react-icons/si";
import BreakingNews from "../Pages/Home/BreakingNews";



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
                            <li><NavLink to={'/dashboard/addpublisher'} className=' lg:text-2xl'><SiAffinitypublisher></SiAffinitypublisher>Add Publisher</NavLink></li>                            
                            <li><NavLink to={'/dashboard/managepublisher'} className=' lg:text-2xl'><SiAffinitypublisher></SiAffinitypublisher>Manage Publisher</NavLink></li>                            
                            
                            
                            </>
                        :<>
                         {/* for all user */}
                            <li><NavLink to={'/dashboard/userhome'} className=' lg:text-2xl'><FaHome></FaHome>User Home</NavLink></li>
                           
                            
                        
                        </>
                    }                    
                     
                     <hr className="border-b-4 w-full my-5"/>              

                   {/* common */}

                   <li><NavLink to={'/'} className=' lg:text-2xl'><FaHome></FaHome> Home</NavLink></li>
                   
                    <li><NavLink to={'/dashboard/myarticles'} className=' lg:text-2xl'><MdArticle></MdArticle>My Articles</NavLink></li>
                    <li><NavLink to={'/dashboard/subscription'} className=' lg:text-2xl'><MdSubscriptions></MdSubscriptions> Subscription</NavLink></li>
                    <li><NavLink to={'/dashboard/addarticles'} className=' lg:text-2xl'><FaAd></FaAd> Add Articles</NavLink></li>
                    <li><NavLink to={'/dashboard/premiumarticles'} className=' lg:text-2xl'><FaList></FaList> Premium Articles</NavLink></li>

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