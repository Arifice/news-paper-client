/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form"
import login from '../../assets/login/login.png'
import SocialLogin from "../../Components/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Components/SectionTitle";

const Login = () => {
    const {signIn}=useAuth();
    const location=useLocation();    
    const {register, handleSubmit,formState: { errors }} = useForm();
    const navigate=useNavigate();
    const from=location.state?.from?.pathname || '/';
    
      const onSubmit = (data) => {
        console.log(data);            
        const email=data.email;       
        const password=data.password;            

        const userInfo={email,password}
        console.log({userInfo});
        signIn(email,password)
            .then(result=>{
                console.log(result.user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You have successfully login",
                    showConfirmButton: false,
                    timer: 1000
                  });
                  navigate (from,{replace:true})
            })
            .catch(error=>{
                console.log(error);
            })

      }
    
      
    return (
        <div className=" py-24">
            <Helmet>
                <title>News / Login</title>
            </Helmet>
            <SectionTitle heading={'Login Your account'} subHeading={'hurry up'}>

            </SectionTitle>
            <div className="p-4 m-4">
            <div className="flex lg:flex-row items-center flex-col gap-10">
                <div className=" w-1/2">
                    <figure><img src={login} alt="" /></figure>
                </div>
               <div className="lg:ml-20 lg:w-1/2 w-full">
               <div className=" ">     
                <h1 className="text-center my-5 text-3xl font-Cinzel font-bold">Login</h1> 
                        <div className="flex justify-center">
                            <SocialLogin></SocialLogin>
                        </div>
                        <hr className="border border-b-2 mb-10 w-full border-black my-3"/>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                                                
                        
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
                            <input type="password" {...register("password", { required: true })} placeholder="Password" className="input text-xl lg:text-3xl input-bordered" />
                            {errors.password?.type==='required' && <span className="text-red-600">This field is required</span>}
                        </div>                        

                        <input type="submit" value={'Login'} className="btn my-10 lg:text-2xl font-semibold  btn-block btn-success"/>
                    </form>
                    <p className="text-2xl text-center">Don't have an account? Please go to <Link to={'/signup'} className="text-red-600 font-Cinzel text-3xl font-bold">Sign up</Link></p>
                </div>   
                </div>             
            </div>
        </div>
        </div>
    );
};

export default Login;