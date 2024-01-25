import { axiosSecure } from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const usePublisher = () => {
    const {data:publisher=[]}=useQuery({
        queryKey:['publisher'],
        queryFn:async()=>{
            const res=await axiosSecure.get('/publishers');
            return res.data;
        }
    })   
    return [publisher];
};

export default usePublisher;