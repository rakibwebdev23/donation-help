import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const SignIn = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                reset();
                Swal.fire({
                    title: `${user.email} Sign In successfully`,
                    showClass: {
                        popup: `animate__animated animate__fadeInUp animate__faster`
                    },
                    hideClass: {
                        popup: `animate__animated animate__fadeOutDown animate__faster`
                    }
                });
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error));
    };

    return (
        <div>
            <div className="hero w-full min-h-screen bg-cover">
                <div className="hero-overlay w-full min-h-screen flex items-center justify-center px-4">
                    <div className="card bg-black p-8 sm:p-12 lg:w-full xl:w-1/2 max-w-screen-xl w-full rounded-xl shadow-xl">
                        <h2 className="text-orange-500 text-3xl sm:text-4xl font-bold text-center mb-6">Sign In</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered w-full p-4 text-black rounded-lg"
                                    {...register("email", { required: "Email is required" })}
                                />
                                {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    className="input input-bordered w-full p-4 text-black rounded-lg"
                                    {...register("password", { required: "Password is required" })}
                                />
                                {errors.password && <span className="text-red-600 text-sm">{errors.password.message}</span>}
                            </div>

                            <div className="form-control mt-6">
                                <input
                                    className="relative w-full py-3 text-white border-2 border-transparent bg-orange-600 transition-all duration-300 hover:border-orange-600 hover:bg-transparent hover:text-orange-600 rounded-lg"
                                    type="submit"
                                    value="Sign In"
                                />
                            </div>

                            <p className="text-white mt-2 text-center">
                                Do not have an account?{" "}
                                <Link className="text-blue-600 font-bold hover:underline" to="/signup">
                                    Sign Up
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;