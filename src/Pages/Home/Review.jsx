import SectionTitle from "../../Components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { axiosPublic } from "../../Hooks/useAxiosPublic";



const Review = () => {
    const [reviews,setreviews]=useState([]);
    
   useEffect(()=>{
            axiosPublic.get('/reviews')
                    .then(res=>{
                        setreviews(res.data);
                    })
    
   },[])
    

    return (
        <section>
            <SectionTitle
                heading={"Testimonials"}
                subHeading={'what Our Client Says'}
            ></SectionTitle>
               
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                 {
                    reviews.map(reveiw=><SwiperSlide key={reveiw._id}>
                        
                        <div className="lg:m-24 m-4 p-4 lg:px-24 lg:py-16 flex flex-col items-center">
                         <div className="rating gap-1">
                                <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400"  />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400"checked />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
                            </div>
                            <p className="py-10">{reveiw.details}</p>
                            <h1 className="text-3xl font-bold text-center text-orange-400">{reveiw.name}</h1>
                        </div>
                        
                        
                    </SwiperSlide>)
                 } 
                  
                    
                   
                </Swiper>
            
        </section>
    );
};

export default Review;