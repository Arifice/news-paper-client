import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const Header = () => {
   const [trendingArticles,setTrendingArticles]=useState([]);
   useEffect(()=>{
        fetch('articles.json')
            .then(res=>res.json())
            .then(result=>{
                setTrendingArticles(result);
            })
   },[])
console.log({trendingArticles})
    return (
        <div className=''>          
        
           <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                 {
                    trendingArticles.slice(0,6).map(article=><SwiperSlide key={article._id}>
                        
                        <div className="hero relative h-[450px] lg:h-[700px]" style={{backgroundImage: `url(${article.image})`,width:'100%'}}>
                            <div className="hero-overlay opacity-60"></div>
                            <div className="absolute left-10 top-1/2 text-white">
                              <div className="">
                                <h1 className="mb-5 text-2xl font-semibold font-Cinzel lg:text-5xl">{article.title}</h1>
                                <p className="mb-5 text-justify pr-10">{article.description}</p>
                                <button className="btn btn-outline border-0 border-b-8 btn-warning btn-lg font-Cinzel text-3xl">Details</button>
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