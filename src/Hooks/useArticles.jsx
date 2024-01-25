import { axiosPublic } from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const useArticles = () => {
        const {data:article=[]}=useQuery({
            queryKey:['articles'],
            queryFn:async()=>{
                const res=await axiosPublic.get('/articles');
                return res.data;
            }
        })
        return [article];    
};

export default useArticles;