/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet-async";
import image from '../../../assets/bannar/5.jpg'
import useAuth from "../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const Subscription = () => {
    const {user}=useAuth();
    const {register,handleSubmit,} = useForm()
    
    
      const onSubmit =async (data) => {
        console.log(data);
        
        
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
                            <span className="label-text text-3xl"> Name</span>
                            
                        </div>
                        <input type="text"
                        {...register('name',{required:true})}
                        placeholder="Name " disabled defaultValue={user?.displayName} className="input text-3xl input-secondary input-bordered w-full" />
                       
                    </label>            
                            
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-3xl"> email</span>
                            
                        </div>
                        <input type="email"
                        {...register('email',{required:true})}
                        placeholder="Email " disabled defaultValue={user?.email} className="input text-3xl input-secondary input-bordered w-full" />
                       
                    </label> 

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-3xl">Category</span>
                            
                        </div>
                        <select   {...register("category",{required:true})}
                            className="select select-secondary text-3xl w-full ">
                                <option value={'default'}>Pick your favorite language</option>
                                <option value="5_days_10$">5 days $20</option>
                                <option value="10_days_40$">10 days $40</option>
                                <option value="1_month_100$">1 month $100</option>
                                <option value="6_month_300$">6 month $300</option>
                                  
                        </select>                        
                    </label>    
                   <Link to={'/dashboard/payment'}> <button className="btn btn-warning text-3xl font-Cinzel ">Subscribe</button></Link>
                </form>
               </div>
        </div>
        </div>
    );
};

export default Subscription;