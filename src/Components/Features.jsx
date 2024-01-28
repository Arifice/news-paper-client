/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";

const Features = () => {
    return (
        <div className="my-16">
            <SectionTitle heading={'Features Section'} subHeading={'Take Your Best  '}>
                
            </SectionTitle>
            <div className="grid lg:grid-cols-3 grid-cols-1   rounded-lg shadow-2xl bg-black p-10 gap-5 justify-around">
                <div className="border-warning text-white bg-black border-4 p-3 shadow-2xl  rounded-xl">
                    <p className="  p-2 m-2 rounded-lg font-semibold text-2xl">Free For 1 Month</p>
                    <div  className="flex justify-between text-2xl font-bold p-5">
                        <div>
                            <h1>Premium</h1>
                            <h1>Individual</h1>
                        </div>
                        <div className="font-Cinzel">
                            <h1>Free</h1>
                            <p>For 1 month</p>
                        </div>                       
                    </div>
                    <div className="font-semibold">
                        <ul className="list-disc m-5 p-5">
                                <li>1 Premium account </li>
                                <li>Cancel anytime </li>
                                <li>15 hours/month of listening time from our audiobooks subscriber catalog </li>
                        </ul>
                    </div>
                    <div className="flex justify-center">
                        <h1 className=" text-warning border-warning border-b-4 lg:text-2xl font-Cinzel lg:font-semibold ">try free for 1 month</h1>
                    </div>
                    <p className="p-5 text-center">Free for 1 month, then $10.99 per month after. Offer only available if you haven't tried Premium before. Terms apply</p>

                </div>
                <div className="border-warning text-white bg-black border-4 p-3 shadow-2xl  rounded-xl">
                    <div className="flex justify-between items-center">
                        <p className="  p-2 m-2 rounded-lg font-bold text-2xl">Premium Duo</p>
                        <div className="font-Cinzel"> 
                            <p>$ 14.99</p>
                            <p>Per month</p>
                        </div>
                    </div>
                    
                    <div className="font-semibold">
                        <ul className="list-disc m-5 p-5 my-20">
                                <li>2 Premium account </li>
                                <li>Cancel anytime </li>
                                <li>15 hours/month of listening time from our audiobooks subscriber catalog ( plan manager only )  </li>
                        </ul>
                    </div>
                    <div className="flex justify-center">
                       <Link to={'/dashboard/subscription'}> <button className="btn btn-warning border-0 border-b-4 lg:text-2xl font-Cinzel lg:font-semibold btn-outline">Get Premium Duo</button></Link>
                    </div>
                    <p className="p-5 text-center">For couples who resides at the same address. Terms apply</p>

                </div>
                <div className="border-warning text-white bg-black border-4 p-3 shadow-2xl  rounded-xl">
                    <div className="flex justify-between items-center">
                            <p className="p-5 font-bold text-2xl">Premium Family</p>
                            <div className="font-Cinzel"> 
                                <p>$ 16.99</p>
                                <p>Per month</p>
                            </div>
                    </div>
                    <div className="font-semibold">
                        <ul className="list-disc m-5 p-5 my-16">
                                <li>Up to 6 Premium or Kids account </li>
                                <li>Block explicit music </li>
                                <li>Access to Spotify Kids </li>
                                <li>Cancel anytime </li>
                                <li>15 hours/month of listening time from our audiobooks subscriber catalog ( plan manager only  )</li>
                        </ul>
                    </div>
                    <div className="flex justify-center">
                        <Link to={'/dashboard/subscription'}><button className="btn btn-warning border-0 border-b-4 lg:text-2xl font-Cinzel lg:font-semibold btn-outline">Get Premium family</button></Link>
                    </div>
                    <p className="p-5 text-center">For up to 6 family members reading at the same address. Terms apply</p>

                </div>
                
            </div>
        </div>
    );
};

export default Features;