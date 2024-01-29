import { Link } from "react-router-dom";


const ArticlesCard = ({article}) => {
    const {title,description,image,_id}=article
    return (
       <div>
         <div className="flex space-x-4">
            <img style={{borderRadius:'  ' }} className="lg:w-[120px] w-16 " src={image} alt="" />
            <div>
                <p className="font-Cinzel lg:text-2xl font-semibold">{title}...........</p>
                <p className="text-[#BB8506] font-Roboto">{description.slice(0,120)}
                <Link to={`/details/${_id}`} className="text-xl font-Roboto font-bold text-green-600">Details</Link>
                </p> 
              
            </div>            
        </div>
        
       </div>
    );
};

export default ArticlesCard;