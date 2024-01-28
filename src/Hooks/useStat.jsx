import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "./useAxiosSecure";


const useStat = () => {    
    const {data:stat=[],refetch}=useQuery({
        queryKey:['stat'],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/stat`);
            return res.data;
        }
    })
   return [stat,refetch]
};

export default useStat;