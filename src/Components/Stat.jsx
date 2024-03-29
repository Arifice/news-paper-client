import { FaDollarSign, FaUsers } from "react-icons/fa";
import { MdArticle, MdPublishedWithChanges } from "react-icons/md";
import useStat from "../Hooks/useStat";
import useUsers from "../Pages/Home/useUsers";


const Stat = () => {
    const [stat]=useStat();
    const [users,]=useUsers();
    const premiumUser=users.filter(user=>user?.subscription!=='Free');  
    const normalUser=users.length - premiumUser.length;
    
    return (
        
            <div className="flex justify-center mt-10">
                <div className="stats shadow-2xl ">
                    
                    <div className="stat">
                        <div className="stat-figure lg:text-3xl lg:font-bold text-secondary">
                            <FaDollarSign></FaDollarSign>
                        </div>
                        <div className="stat-title">Revenue</div>
                        <div className="stat-value">${stat?.revenue} </div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary lg:text-3xl lg:font-bold">
                            <FaUsers></FaUsers>
                        </div>
                        <div className="stat-title">Total Users</div>
                        <div className="stat-value">{stat?.users}</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary lg:text-3xl lg:font-bold">
                            <FaUsers></FaUsers>
                        </div>
                        <div className="stat-title">Premium Users</div>
                        <div className="stat-value">{premiumUser.length}</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary lg:text-3xl lg:font-bold">
                            <FaUsers></FaUsers>
                        </div>
                        <div className="stat-title">Normal Users</div>
                        <div className="stat-value">{normalUser}</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary lg:text-3xl lg:font-bold">
                            <MdArticle></MdArticle>
                        </div>
                        <div className="stat-title">Articles</div>
                        <div className="stat-value">{stat?.articles}</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary lg:text-3xl lg:font-bold">
                            <MdPublishedWithChanges></MdPublishedWithChanges>
                        </div>
                        <div className="stat-title">Publishers</div>
                        <div className="stat-value">{stat?.publishers}</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                    
                </div>
            </div>
           
        );
};

export default Stat;