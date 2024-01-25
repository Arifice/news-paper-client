import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";

const Adminhome = () => {
    return (
        <div>
            <Helmet>
                <title>News/admin home</title>
            </Helmet>            
            <div>
                <SectionTitle heading={'Admin home'} subHeading={'manage all'}></SectionTitle>
            </div>
        </div>
    );
};

export default Adminhome;