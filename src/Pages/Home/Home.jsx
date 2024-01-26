import { Helmet } from "react-helmet-async";
import About from "./About";
import Bannar from "./Bannar";
import Features from "../../Components/Features";
import Header from "./Headers";
import Publisher from "./Publisher";
import Review from "./Review";
import TopNews from "./TopNews";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div className="py-24">
            <Helmet>
                <title>ABC Newspaper / Home</title>
            </Helmet> 
                   
            <Header></Header> 
            <BreakingNews></BreakingNews>         
            <Features></Features>
            <Bannar></Bannar>
            <Publisher></Publisher>
            <TopNews></TopNews>
            <About></About>
            <Review></Review>
            
        </div>
    );
};

export default Home;