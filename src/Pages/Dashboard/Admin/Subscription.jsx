import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";


const Subscription = () => {
    return (
        <div>
             <Helmet>
                <title>News/Subscription</title>
            </Helmet>
            <div>
                <SectionTitle heading={'Subscription'} subHeading={'manage'}></SectionTitle>
            </div>
            
        </div>
    );
};

export default Subscription;