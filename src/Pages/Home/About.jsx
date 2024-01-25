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
            <div className="flex absolute text-purple-600 text-center rounded-lg shadow-2xl z-50 top-1/3  justify-center items-center">
                <div className="flex-1">
                    <img className="w-full p-10 rounded-lg" src={image} alt="" />
                </div>
                <div className="flex-1 bg-base-100 rounded-lg p-5 m-5 space-y-3">
                    <h1 className="lg:text-5xl text-3xl font-semibold lg:font-bold">A part of your everyday life</h1>
                    <p className="text-success">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus explicabo optio quas voluptas quae ullam, similique labore perferendis odio repellat ducimus enim quibusdam inventore voluptatem est ex eaque rerum ea corporis tempore quasi. Repellendus itaque eveniet nam alias, praesentium architecto, laudantium ea quos facilis laboriosam similique! Odit mollitia voluptate nisi!</p>
                    <Link><button className="btn btn-outline text-3xl  btn-warning border-0 border-b-4">More Details</button></Link>
                </div>               
            </div>
           
        
        
    </div>
       </div>
    );
};

export default About;