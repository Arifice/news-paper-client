
import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle";
import { MdArticle } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import  { axiosSecure } from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";

const AddArticles = () => {
    const {user}=useAuth();
    const {register,handleSubmit,reset} = useForm()
    const axiosPublic=useAxiosPublic();
    // const axiosSecure=useAxiosSecure();
    
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
            const articleItem={
                title:data.name,
                publisher:data.publisherName,
                userName:user.displayName,
                userEmail:user.email,
                publisherEmail:data.publisherEmail,
                description:data.description,               
                image:res.data.data?.display_url,
                tags:data.tags,
                status:'pending',
            }
            console.log({articleItem});
            // secure data:
            const articleRes=await axiosSecure.post('/articles',articleItem);
            console.log(articleRes.data);
            if(articleRes.data?.insertedId){
                Swal.fire({
                    title: "Good job!",
                    text: "You have successfully added an item",
                    icon: "success"
                  });
                reset();

            }
        }
    }
    
    return (
        <div>
            <SectionTitle heading={'Add an Items'} subHeading={'Whats new?'}></SectionTitle>
        
            <div >
            <form onSubmit={handleSubmit(onSubmit)} className="bg-base-200 px-16 pb-12 space-y-6  mx-auto text-3xl">              

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-3xl">Article name</span>
                            
                        </div>
                        <input type="text"
                        {...register('name',{required:true})}
                        placeholder="Article name " className="input text-3xl input-secondary input-bordered w-full" />
                       
                    </label>             
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-3xl">Publisher name</span>
                            
                        </div>
                        <input type="text"
                        {...register('publisherName',{required:true})}
                        placeholder="publisher name " className="input text-3xl input-secondary input-bordered w-full" />
                       
                    </label>             
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-3xl">Publisher email</span>
                            
                        </div>
                        <input type="email"
                        {...register('publisherEmail',{required:true})}
                        placeholder="publisher email " className="input text-3xl input-secondary input-bordered w-full" />
                       
                    </label>             
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-3xl">tag</span>                            
                        </div>
                        <input type="text"
                        {...register('tags',{required:true})}
                        placeholder="Tag Name " className="input text-3xl input-secondary input-bordered w-full" />                       
                    </label>   
                        
                    </div>         
               
                <label className="form-control">
                    <div className="label">
                        <span className="label-text text-3xl"> Description</span>                        
                    </div>
                    <textarea {...register('description',{required:true})} className="textarea textarea-warning textarea-bordered h-24" placeholder="Description"></textarea>
                    
                </label>
                    <div className="form-control">
                        <input {...register('image',{required:true})} type="file"  className="file-input text-3xl file-input-bordered file-input-secondary w-1/2 " />
                    </div>

                    <button className="btn btn-warning text-3xl font-Cinzel "><MdArticle></MdArticle>Add an Article</button>
                </form>
            </div>
        </div>
    );
};


export default AddArticles;