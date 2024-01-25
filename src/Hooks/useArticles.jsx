import { axiosPublic } from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const useArticles = () => {
        const {data:articles=[]}=useQuery({
            queryKey:['articles'],
            queryFn:async()=>{
                const res=await axiosPublic.get('/articles');
                return res.data;
            }
        })
        return [articles];    
};

export default useArticles;