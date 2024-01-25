import { useForm } from "react-hook-form"
import login from '../../assets/login/login.png'
import SocialLogin from "../../Components/SocialLogin";
import { Link, useLocation, useNavigate,  } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Components/SectionTitle";
import { axiosPublic } from "../../Hooks/useAxiosPublic";

const SignUp = () => {
   
    const {createUser,updateUserProfile,emailVerification}=useAuth();    
    const {register,reset, handleSubmit,formState: { errors }} = useForm()
    const location=useLocation();
    const navigate=useNavigate();
    const from=location.state?.from?.pathname || '/';

    
    
      const onSubmit =async(data) => {
        console.log(data);       
            const name=data.name;
            const email=data.email;
            const password=data.password;
            const imageFile={image:data.image[0]};
        const res= await axiosPublic.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_api_key}`,imageFile,{
            headers:{
                'content-type':'multipart/form-data'
            }
        })
        console.log(res.data);
        const profilePic=res.data?.data?.display_url;
        if(res.data?.success){
            const userInfo={
                name:data.name,      
                email:data.email,       
                password:data.password, 
                photoUrl:profilePic,
            }
            console.log({profilePic});
            createUser(email,password)
            .then(result=>{
                console.log(result.user);
                emailVerification(email)
                        .then(result=>{
                            console.log(result);
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Please verify your email",
                                showConfirmButton: false,
                                timer: 1000
                              });
                        })
                        .catch(error=>{
                            console.log(error);
                        })
                    updateUserProfile(name,profilePic)
                        .then(result=>{
                            console.log(result);
                            
                            axiosPublic.post('/users',userInfo)
                                .then(res=>{
                                    console.log(res.data);
                                    if(res.data?.insertedId){
                                        Swal.fire({
                                            position: "top-end",
                                            icon: "success",
                                            title: "You have successfully sign up",
                                            showConfirmButton: false,
                                            timer: 1000
                                          });
                                          reset();
                                         navigate(from,{replace:true}) 
                                    }
                                })

                            
                           
                        })
                        .catch(error=>{
                            console.log(error);
                        })

            })
            .catch(error=>{
                console.log(error);
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: `${error.message}`,
                    showConfirmButton: false,
                    timer: 1000
                  });
            })

        }       
        
      }
    
     
    return (
        <div className="py-24">
            <Helmet>
                <title>News / Signup</title>
            </Helmet>
            <SectionTitle heading={'Sign Up Your account'} subHeading={'hurry up'}>

            </SectionTitle>
            <div className="p-4 m-4">
            <div className="flex lg:flex-row items-center flex-col gap-10">
                <div className=" w-1/2">
                    <figure><img src={login} alt="" /></figure>
                </div>
               <div className="lg:ml-20 lg:w-1/2 w-full">
               <div className=" ">     
                <h1 className="text-center my-5 text-3xl font-Cinzel font-bold">Sign Up</h1> 
                        <div className="flex justify-center">
                            <SocialLogin></SocialLogin>
                        </div>
                        <hr className="border border-b-2 mb-10 w-full border-black my-3"/>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl lg:text-3xl">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Name" className="input text-xl lg:text-3xl input-bordered" />
                            {errors.name?.type==='required' && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl lg:text-3xl">Image</span>
                            </label>
                            <input type="file"  {...register("image", { required: false })} className="file-input file-input-bordered file-input-warning w-full" />
                            {errors.image?.type==='required' && <span className="text-red-600">This field is required</span>}
                        </div>
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl lg:text-3xl">Photo URL</span>
                            </label>
                            <input type="text"  {...register("photo", { required: false })} className="input text-xl lg:text-3xl input-bordered" />
                            {errors.image?.type==='required' && <span className="text-red-600">This field is required</span>}
                        </div> */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl lg:text-3xl">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input text-xl lg:text-3xl input-bordered" />
                            {errors.email?.type==='required' && <span className="text-red-600">This field is required</span>}
                        </div>                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl lg:text-3xl">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,
                                minLength:6, 
                                maxLength: 20,
                                pattern: /^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/ 
                                 
                                 })} placeholder="Password" className="input text-xl lg:text-3xl input-bordered" />
                                {errors.password?.type==='required' && <span className="text-red-600">Password is required</span>}
                                {errors.password?.type==='minLength' && <span className="text-red-600">Must be 6 character </span>}
                                {errors.password?.type==='maxLength' && <span className="text-red-600">Maximum 20 character </span>}
                                {errors.password?.type=='pattern' && <span className="text-red-600">Must have one uppercase one lowercase one special character </span>}
                        </div>                        

                        <input type="submit" value={'Sign Up'} className="btn my-10 lg:text-2xl font-semibold  btn-block btn-success"/>
                    </form>
                    <p className="text-2xl text-center">Already have an account? Please go to <Link to={'/login'} className="text-red-600 font-Cinzel text-3xl font-bold">Login</Link></p>
                </div>   
                </div>             
            </div>
        </div>
        </div>
    );
};

export default SignUp;
