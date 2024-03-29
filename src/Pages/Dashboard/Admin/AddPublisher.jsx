import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { SiAffinitypublisher } from "react-icons/si";
import { useNavigate } from "react-router-dom";


const AddPublisher = () => {   
    const {register,handleSubmit,reset} = useForm()
    const axiosPublic=useAxiosPublic();   
    const navigate=useNavigate();
      const onSubmit =async (data) => {
        console.log(data);
        const imageFile={image:data.image[0]};
        const res= await axiosPublic.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_api_key}`,imageFile,{
            headers:{
                'content-type':'multipart/form-data'
            }
        })
        console.log(res.data);
        if(res.data?.success){
            // send the menu item data to the server with image.
            const publisher={
                name:data.name,               
                email:data.email,      
                image:res.data.data?.display_url,               
            }
            console.log({publisher});
            // secure data:
            const articleRes=await axiosSecure.post('/publishers',publisher);
            console.log(articleRes.data);
            if(articleRes.data?.insertedId){
                reset();
                Swal.fire({
                    title: "Good job!",
                    text: "You have successfully added an item",
                    icon: "success"
                  });
                navigate('/dashboard/managepublisher');

            }
        }
    }
    return (
        <div>
            <Helmet>
                <title>News/Add publidher</title>
            </Helmet>
            <div>
                <SectionTitle heading={'Add publishers'} subHeading={'manage'}></SectionTitle>
            </div>

            <div >
            <form onSubmit={handleSubmit(onSubmit)} className="bg-base-200 px-16 pb-12 space-y-6  mx-auto text-3xl">              

            <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-3xl">Publisher name</span>
                            
                        </div>
                        <input type="text"
                        {...register('name',{required:true})}
                        placeholder="Publisher name " className="input text-3xl input-secondary input-bordered w-full" />
                       
                </label>            
                        
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-3xl">Publisher email</span>
                            
                        </div>
                        <input type="email"
                        {...register('email',{required:true})}
                        placeholder="publisher email " className="input text-3xl input-secondary input-bordered w-full" />
                       
                    </label>          
                           
               
                    <div className="form-control">
                        <input {...register('image',{required:true})} type="file"  className="file-input text-3xl file-input-bordered file-input-secondary w-1/2 " />
                    </div>

                    <button className="btn btn-warning text-3xl font-Cinzel "><SiAffinitypublisher></SiAffinitypublisher>Add Publisher</button>
                </form>
            </div>
            
        </div>
    );
};

export default AddPublisher;