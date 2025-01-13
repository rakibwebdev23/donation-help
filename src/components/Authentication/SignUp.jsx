import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const SignUp = () => {
    const { createUser, updateUserProfile } = useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
        try {
            const result = await createUser(data.email, data.password);
            const loggedUser = result.user;

            await updateUserProfile(data.name, data.photoURL);
            
            const userInfo = {
                name: data.name,
                email: loggedUser.email
            };

            const res = await axiosPublic.post('/users', userInfo);
            
            if (res.data.insertedId) {
                reset();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "<h2 class='text-2xl font-bold text-[#2ECC71]'>🎉 Registration Successful!</h2>",
                    html: `
                        <div class="space-y-3">
                            <p class="text-gray-600 text-lg">Welcome ${data.name}! Your account has been created.</p>
                        </div>
                    `,
                    showConfirmButton: true,
                    confirmButtonText: 'Continue to Sign In',
                    confirmButtonColor: '#ed3050',
                    background: "#ffffff",
                    customClass: {
                        popup: 'rounded-xl border-2 border-[#2ECC71]'
                    },
                    showClass: {
                        popup: 'animate__animated animate__fadeInUp animate__faster'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutDown animate__faster'
                    }
                }).then(() => {
                    navigate("/");
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message,
                confirmButtonColor: '#ed3050',
            });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 px-4 py-12">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    {/* Left Side - Image/Banner */}
                    <div className="md:w-1/2 bg-rose-600 p-12 text-white hidden md:flex flex-col justify-center">
                        <h2 className="text-3xl font-bold mb-6">Welcome to CFBD</h2>
                        <p className="text-rose-100 mb-8">Join our community and make a difference in people lives through your donations.</p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Secure donations</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Track your impact</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Join our community</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="md:w-1/2 p-8">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-800">Create an Account</h3>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div>
                                <label className="block text-gray-700 text-sm font-semibold mb-2">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-rose-500 focus:ring-rose-500 text-gray-900"
                                    {...register("name", { required: "Name is required" })}
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-semibold mb-2">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-rose-500 focus:ring-rose-500 text-gray-900"
                                    {...register("email", { required: "Email is required" })}
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
                                <input
                                    type="password"
                                    placeholder="Create a strong password"
                                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-rose-500 focus:ring-rose-500 text-gray-900"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: { value: 6, message: "Password must be at least 6 characters" },
                                        pattern: {
                                            value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                                            message: "Password must include uppercase, lowercase, number and special character"
                                        }
                                    })}
                                />
                                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-rose-600 text-white py-3 rounded font-semibold hover:bg-rose-700 transition-colors duration-300"
                            >
                                Create Account
                            </button>

                            <p className="text-center text-gray-600 text-sm">
                                Already have an account?{" "}
                                <Link to="/signin" className="text-rose-600 font-semibold hover:text-rose-700">
                                    Sign In
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;