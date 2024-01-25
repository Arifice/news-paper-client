import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import useArticles from '../../Hooks/useArticles';


const Header = () => {   
const [articles]=useArticles();
console.log({articles});
    return (
        <div className=''>          
        
           <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                 {
                    articles.slice(0,6).map(article=><SwiperSlide key={article._id}>
                        
                        <div className="hero relative h-[450px] lg:h-[700px]" style={{backgroundImage: `url(${article.image})`,width:'100%'}}>
                            <div className="hero-overlay opacity-60"></div>
                            <div className="absolute left-10 top-1/2 text-white">
                              <div className="">
                                <h1 className="mb-5 text-2xl font-semibold font-Cinzel lg:text-5xl">{article.title}</h1>
                                <p className="mb-5 text-justify pr-10">{article.description}</p>
                                <Link to={`/details/${article._id}`}><button className="btn btn-outline border-0 border-b-8 btn-warning btn-lg font-Cinzel text-3xl">Details</button></Link>
                              </div>
                            </div>
                          </div>
                        
                        
                    </SwiperSlide>)
                 } 
                  
                    
                   
                </Swiper>  
        </div>
       
    );
};

export default Header;