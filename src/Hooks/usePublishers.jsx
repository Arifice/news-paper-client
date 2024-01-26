import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "./useAxiosSecure";

const usePublishers = () => {
    const {data: publishers=[],refetch}=useQuery({
        queryKey:['publishers'],
        queryFn:async()=>{
            const res = await axiosSecure.get('/publishers');
            return res.data;                
        },
        
    }) 
    return [publishers,refetch]  
};

export default usePublishers;