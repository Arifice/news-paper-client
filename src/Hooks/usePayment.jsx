import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "./useAxiosSecure";


const usePayment = () => {
    
    const {data:payments=[],refetch}=useQuery({
        queryKey:['payments'],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/payments`);
            return res.data;
        }
    })
   return [payments,refetch]
};

export default usePayment;