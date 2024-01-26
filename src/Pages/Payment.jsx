import { Helmet } from "react-helmet-async";
import SectionTitle from "../Components/SectionTitle";

const Payment = () => {
    return (
        <div>
            <Helmet>
                <title>News/payment</title>
            </Helmet>
            <SectionTitle heading={'Paymeny'} subHeading={'careful'}></SectionTitle>
            
        </div>
    );
};

export default Payment;