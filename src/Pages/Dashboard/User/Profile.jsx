import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";
import useAuth from "../../../Hooks/useAuth";

const Profile = () => {
    const { user } = useAuth();
    return (
        <div>
            <Helmet>
                <title>News/UserProfile</title>
            </Helmet>
            <div>
                <SectionTitle heading={'User Profile'} subHeading={'welcome'}></SectionTitle>
            </div>
            <div className="flex justify-center">
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={user?.photoURL} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-Cinzel font-bold">{user?.displayName}</h2>
                    <p>{user?.email}</p>
                    
                </div>
            </div>
            </div>
        </div>
    );
};

export default Profile;