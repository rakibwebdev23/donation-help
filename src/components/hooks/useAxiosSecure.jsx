import axios from "axios";

const useAxiosSecure = () => {
    const axiosSecure = axios.create({
        baseURL: "https://donation-server-hazel.vercel.app"
    })
    return axiosSecure;
};

export default useAxiosSecure;