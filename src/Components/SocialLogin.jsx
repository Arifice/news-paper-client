import { FaGithub, FaGooglePlus } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const SocialLogin = () => {
    const {signWithgoogle,signWithGithub}=useAuth();
    const navigate=useNavigate();
    const  location=useLocation();
    const axiosPublic=useAxiosPublic();
    const from=location.state?.from?.pathname || '/'; 
    const handleGoogleSignIn=()=>{
        signWithgoogle()
            .then(result=>{
                console.log(result.user);
                const userInfo={
                    name:result.user?.displayName,
                    email:result.user?.email,
                    photoUrl:result.user?.photoURL,
                    phoneNumber:result?.userphoneNumbe,
                }
                axiosPublic.post('/users',userInfo)
                    .then(res=>{
                        console.log(res.data);
                        Swal.fire({
                            title: "Good job!",
                            text: "You have successfully login",
                            icon: "success"
                          }); 
                          navigate(from,{replace:true});
                    })
                
            })
            .catch(error=>{
                console.log(error);
                Swal.fire({
                    title: "Error",
                    text: `${error.message}`,
                    icon: "error",                    
                });
            })
    }

    const handleGithubSignIn=()=>{
        signWithGithub()
            .then(result=>{
                console.log(result.user);
                Swal.fire({
                    title: "Good job!",
                    text: "You have successfully login",
                    icon: "success"
                  }); 
                  navigate(from,{replace:true});
            })
            .catch(error=>{
                console.log(error);
                Swal.fire({
                    title: "Error",
                    text: `${error.message}`,
                    icon: "error",                    
                });
            })
    }
    return (
        <div className="flex gap-10">
            <button onClick={handleGoogleSignIn} className="btn btn-circle  text-5xl text-success"><FaGooglePlus></FaGooglePlus></button>
            <button onClick={handleGithubSignIn} className="btn btn-circle text-5xl text-warning"><FaGithub></FaGithub></button>
            
        </div>
    );
};

export default SocialLogin;