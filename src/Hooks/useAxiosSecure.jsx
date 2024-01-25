import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

export const axiosSecure=axios.create({
    baseURL:'http://localhost:5000',
})

const useAxiosSecure = () => {
    const {logOut}=useAuth();
    const navigate=useNavigate();
    // request interceptor to add athorization header for every secure  call 
    // to the api 
    axiosSecure.interceptors.request.use(config=>{        
        const token=localStorage.getItem('token');
        // console.log('request stopped by interceptors',token);
        config.headers.authorization=`Bearer ${token}`;
        return config;
    }, error=>{
        if(error){
            return Promise.reject(error);
        }
    })
    axiosSecure.interceptors.response.use(response=>{
        return response;
    }, async error=>{
        const status=error.response?.status;
        console.log(status);
        if(status===401 || status===403){
            await logOut();
            navigate('/login');                
        }
        return Promise.reject(error);
    })
    return axiosSecure;
};

export default useAxiosSecure;