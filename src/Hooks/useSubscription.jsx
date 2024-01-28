import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "./useAxiosPublic";
import useAuth from "./useAuth";


const useSubscription = () => {
    const {user}=useAuth();
    const {data:subscription=[],refetch}=useQuery({
        queryKey:['subscription'],
        queryFn:async()=>{
            const res=await axiosPublic.get(`/users/${user.email}`);
            return res.data;
        }
    })
   return [subscription,refetch]
};

export default useSubscription;