import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import SocialSign from "./SocialSign/SocialSign";

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
            console.log(userInfo);
            

            const res = await axiosPublic.post('/users', userInfo);

            if (res.data.insertedId) {
                reset();
                Swal.fire({
                    title: "🎉 Registration Successful!",
                    text: `Welcome ${data.name}! Your account has been created successfully.`,
                    icon: "success",
                    confirmButtonText: 'Continue to Sign In',
                    confirmButtonColor: '#ed3050',
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
        <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/2 bg-rose-600 p-10 text-white hidden md:flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-4">Join CFBD</h2>
                    <p className="text-lg mb-6">Make a difference by supporting those in need.</p>
                    <ul className="space-y-3">
                        <li className="flex items-center">✅ Secure donations</li>
                        <li className="flex items-center">✅ Track your impact</li>
                        <li className="flex items-center">✅ Join our community</li>
                    </ul>
                </div>

                <div className="md:w-1/2 p-8 w-full bg-slate-700">
                    <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-white">Create an Account</h3>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label className="block text-white font-medium mb-2">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className="w-full px-4 py-3 border rounded focus:ring-rose-500 focus:border-rose-500"
                                {...register("name", { required: "Name is required" })}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                        </div>

                        <div>
                            <label className="block text-white font-medium mb-2">Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 border rounded focus:ring-rose-500 focus:border-rose-500"
                                {...register("email", { required: "Email is required" })}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>

                        <div>
                            <label className="block text-white font-medium mb-2">Password</label>
                            <input
                                type="password"
                                placeholder="Create a strong password"
                                className="w-full px-4 py-3 border rounded focus:ring-rose-500 focus:border-rose-500"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Password must be at least 6 characters" },
                                    pattern: {
                                        value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                                        message: "Password must include uppercase, lowercase, number and special character"
                                    }
                                })}
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-rose-600 text-white py-3 rounded font-semibold hover:bg-rose-700 transition"
                        >
                            Create Account
                        </button>
                    </form>
                    <SocialSign></SocialSign>
                    <p className="text-left text-white mt-4">
                        Don’t have an account ?{" "}
                        <Link to="/signin" className="text-rose-600 font-semibold hover:underline">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;