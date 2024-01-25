import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";


const Userhome = () => {
    return (
        <div>
             <Helmet>
                <title>News/User home</title>
            </Helmet>
            <div>
                <SectionTitle heading={'User home'} subHeading={'Look'}></SectionTitle>
            </div>
            
        </div>
    );
};

export default Userhome;