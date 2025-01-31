import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FaGoogle } from "react-icons/fa";

const SocialSign = () => {
    const { googleSignUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const axiosPublic = useAxiosPublic();

    const handleGoogleSignUser = () => {
        googleSignUser()
            .then(result => {
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email
                };

                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data) {
                            navigate(from, { replace: true });
                        }
                    });
            })
            .catch(error => console.log(error));
    };

    return (
        <div className="mt-6 text-center">
            <div className="flex items-center justify-center space-x-2">
                <div className="h-px bg-white w-14"></div>
                <span className="text-sm font-medium text-rose-500">Sign in with</span>
                <div className="h-px bg-white w-14"></div>
            </div>
            <div className="mt-4">
                <button
                    onClick={handleGoogleSignUser}
                    className="flex items-center justify-center w-full max-w-xs mx-auto px-6 py-3 bg-slate-900 text-white rounded hover:bg-rose-600 duration-200"
                >
                    <FaGoogle className="text-xl mr-3 text-blue-600" />
                    <span className="text-sm font-semibold">Sign in with Google</span>
                </button>
            </div>
        </div>
    );
};

export default SocialSign;