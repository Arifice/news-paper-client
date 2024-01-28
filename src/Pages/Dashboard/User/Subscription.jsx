/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet-async";
import image from '../../../assets/bannar/5.jpg'
import useAuth from "../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";



const Subscription = () => {
    const {user}=useAuth();
    const navigate=useNavigate();
    const {register,handleSubmit,reset} = useForm()
    
    
      const onSubmit =async (data) => {
        console.log(data);
        if((data.category=='5 days' && data.price=='24.99')
            || (data.category=='10 days' && data.price=='49.99')
            ||  (data.category=='1 month' && data.price=='100')
            ||  (data.category=='6 month' && data.price=='300')           
            ||  (data.category=='premium duo' && data.price=='99.99')           
            ||  (data.category=='premium family' && data.price=='199.99')           
        ){
            const subscriberInfo={
                name:user?.displayName,
                email:user?.email,
                category:data.category,
                date:new Date(),
                price:data.price,
                status:'pending'
            }
            console.log({subscriberInfo});
            const res=await axiosSecure.post('/cart',subscriberInfo);
               console.log(res.data);
               if(res.data.insertedId){
                reset();
                Swal.fire({
                    title: "Good job!",
                    text: "Please confirm your payment",
                    icon: "success"
                  });
                navigate('/dashboard/mycart');
               }
        }
        else{
            Swal.fire({
                title: "Error",
                text: "please input correct price",
                icon: "error"
              });
        }
       
        
        
        
        
    }
    return (
        <div>
             <Helmet>
                <title>News/Subscription</title>
            </Helmet>
           
            <div className="flex my-8 justify-center">
                <img className="max-w-sm" src={image} alt="" />
            </div>

            <div className=" mb-32  ">                   
                   
                <div className="flex justify-center">
                  <form onSubmit={handleSubmit(onSubmit)} className="bg-base-200 p-10 lg:p-16 lg:w-2/3 space-y-6  mx-auto text-3xl">              
                  <p className="  rounded-lg text-center font-semibold text-2xl lg:text-3xl">Please take a subscription package</p>
                    
                    

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-3xl">Category</span>
                            
                        </div>
                        <select   {...register("category",{required:true})}
                            className="select select-secondary text-3xl w-full ">
                                <option value={'default'}>Pick your favorite language</option>
                                <option value="5 days">5 days $24.99</option>
                                <option value="10 days">10 days $49.99</option>
                                <option value="1 month">1 month $100</option>
                                <option value="6 month">6 month $300</option>
                                <option value="premium duo">premium duo $ 99.99</option>
                                <option value="premium family">premium family $ 199.99</option>
                                  {/*   to={'/dashboard/payment'} */}
                        </select>                        
                    </label>   
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-3xl">Price</span>
                            
                        </div>
                        <input type="text"
                        {...register('price',{required:true})}
                        placeholder="Price "  className="input text-3xl input-secondary input-bordered w-full" />
                       
                    </label>  
                   <button className="btn btn-warning text-3xl font-Cinzel ">Subscribe</button>
                </form>
               </div>
        </div>
        </div>
    );
};

export default Subscription;