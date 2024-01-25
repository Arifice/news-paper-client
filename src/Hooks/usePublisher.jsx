import { axiosSecure } from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const usePublisher = () => {
    const { data: publishers = [] } = useQuery({
        queryKey: ['publisher'],
        queryFn: async () => {
            const res = await axiosSecure.get('/publishers');
            return res.data;
        }
    })
    return [publishers];
};

export default usePublisher;