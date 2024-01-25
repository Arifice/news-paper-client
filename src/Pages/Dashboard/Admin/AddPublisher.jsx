import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";


const AddPublisher = () => {
    return (
        <div>
            <Helmet>
                <title>News/Add publidher</title>
            </Helmet>
            <div>
                <SectionTitle heading={'Add publishers'} subHeading={'manage'}></SectionTitle>
            </div>
            
        </div>
    );
};

export default AddPublisher;