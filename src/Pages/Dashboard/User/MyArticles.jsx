import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";


const MyArticles = () => {
    return (
        <div>
            <Helmet>
                <title>News/My Article</title>
            </Helmet>
            <div>
                <SectionTitle heading={'MY Article'} subHeading={'manage'}></SectionTitle>
            </div>
        </div>
    );
};

export default MyArticles;