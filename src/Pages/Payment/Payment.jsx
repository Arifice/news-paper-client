import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheackOut from "./CheackOut";
import SectionTitle from "../../Components/SectionTitle";
import { useLoaderData, useParams } from "react-router-dom";


const stripePromise=loadStripe(import.meta.env.VITE_strip_api_key);

const Payment = () => {
    const cartItem=useLoaderData();
    const {id}=useParams();

    return (
        <div>
            <SectionTitle heading={'Payment'}></SectionTitle>
            <Elements stripe={stripePromise}>                
                <CheackOut cartItem={cartItem} id={id}></CheackOut>
            </Elements>
            
        </div>
    );
};

export default Payment;