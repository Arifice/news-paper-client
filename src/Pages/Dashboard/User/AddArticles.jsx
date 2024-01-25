import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";

const AddArticles = () => {
    return (
        <div>
             <Helmet>
                <title>News/Add Article</title>
            </Helmet>
            <div>
                <SectionTitle heading={'Add Article'} subHeading={'manage'}></SectionTitle>
            </div>
            
        </div>
    );
};

export default AddArticles;