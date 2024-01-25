import { Helmet } from "react-helmet-async";
import About from "./About";
import Bannar from "./Bannar";
import Features from "./Features";
import Header from "./Headers";
import Publisher from "./Publisher";
import Review from "./Review";
import TopNews from "./TopNews";

const Home = () => {
    return (
        <div className="py-32">
            <Helmet>
                <title>ABC Newspaper / Home</title>
            </Helmet>
            <Header></Header>
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