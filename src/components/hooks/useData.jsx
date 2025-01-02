import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useData = () => {
    const axiosPublic = useAxiosPublic();
    const { data: donates = [], isPending: isLoading, error, refetch } = useQuery({
        queryKey: ['donates'],
        queryFn: async () => {
            try {
                const res = await axiosPublic.get("/projects");
                return res.data;
            } catch (err) {
                throw new Error("Failed to fetch data");
            }
        }
    })
    return [donates, isLoading, error, refetch];
};

export default useData;