import { Link } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle";
import image from '../../assets/bannar/4.jpg'
import './About.css'

const About = () => {
    return (
       <div className="my-16">
        <div>
        <SectionTitle
            heading={'About Section'}
            subHeading={"we are here"}
        ></SectionTitle>
        </div>
        <div className="about  relative bg-fixed lg:h-[700px] h-[500px]">
            <div className="flex flex-col lg:flex-row absolute text-purple-600 text-center rounded-lg shadow-2xl z-50 lg:top-1/4  justify-center items-center">
                <div className="w-1/2">
                    <img className="w-full p-10 rounded-lg" src={image} alt="" />
                </div>
                <div className="w-1/2 bg-base-100 rounded-lg p-5 m-5 space-y-3">
                    <h1 className="lg:text-5xl md:text-3xl text-sm md:font-semibold lg:font-bold">A part of your everyday life</h1>
                    <p className="text-success text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus explicabo optio quas voluptas quae ullam,!</p>
                    <Link><button className="btn btn-outline lg:text-3xl  btn-warning border-0 border-b-4">More Details</button></Link>
                </div>               
            </div>
           
        
        
    </div>
       </div>
    );
};

export default About;