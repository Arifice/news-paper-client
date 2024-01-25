import { Link } from "react-router-dom";


const ArticlesCard = ({article}) => {
    const {title,description,image}=article
    return (
       <div>
         <div className="flex space-x-4">
            <img style={{borderRadius:'  ' }} className="w-[120px]" src={image} alt="" />
            <div>
                <p className="font-Cinzel text-2xl font-semibold">{title}...........</p>
                <p className="text-[#BB8506] font-Roboto">{description.slice(0,150)}
                <Link className="text-xl font-Roboto font-bold text-green-600">Details</Link>
                </p> 
              
            </div>            
        </div>
        
       </div>
    );
};

export default ArticlesCard;