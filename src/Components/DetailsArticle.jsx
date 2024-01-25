import { Helmet } from "react-helmet-async";
import SectionTitle from "./SectionTitle";
import { useLoaderData, useParams } from "react-router-dom";


const DetailsArticle = () => {
    const article=useLoaderData();
    const id=useParams();
    console.log({article,id});
    const {image,title,description}=article;
    return (
        <div className="py-24 bg-base-100">
            <Helmet>
                <title>News/Details</title>
            </Helmet>
            <div>
                <SectionTitle heading={'Details'} subHeading={'read'}>

                </SectionTitle>
            </div>

            <div className=" py-20 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img className='w-full rounded-xl' src={image} alt="Shoes"  />
                </figure>
                <div className="px-5  items-center text-center">
                    <h2 className="text-3xl text-purple-600 my-5 font-Cinzel font-semibold">{title}</h2>
                    <p className="text-success text-justify lg:text-2xl">{description}</p>
                    <div className="card-actions">
                    
                    </div>
                </div>
                </div>
        </div>
    );
};

export default DetailsArticle;