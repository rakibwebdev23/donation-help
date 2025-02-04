import moment from "moment";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const UpdateDonation = () => {
    const donation = useLoaderData();
    const { img, category_name, category_title, name, email, address, mobileNumber, donate_amount } = donation || {};
    const { user } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
        // reset,
    } = useForm();

    const onSubmit = async (data) => {
        const donateInfo = {
            name: data.name,
            email: data.email || user?.email,
            address: data.address,
            mobileNumber: data.mobile,
            img,
            category_name,
            category_title,
            date: moment().format('Do MMMM YYYY'),
            time: moment().format('h:mm:ss a'),
            donate_amount: Number(parseFloat(data.donationAmount).toFixed(2))
        };
        console.log(donateInfo);

    }

    return (
        <div className="bg-gray-100 p-10 shadow-md">
            <h2 className="text-xl lg:text-3xl text-center mb-2 text-rose-600 font-semibold">Update Your Donation</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-black font-semibold mb-2">Name</label>
                    <input
                        type="text"
                        defaultValue={name}
                        placeholder="Your name"
                        {...register("name", { required: "Name is required" })}
                        className="w-full px-4 py-2 rounded shadow bg-white"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 ">
                    <div>
                        <label className="block text-black font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            defaultValue={email}
                            placeholder="Your email"
                            {...register("email", { required: "Email is required" })}
                            className="w-full px-4 py-2 rounded shadow bg-white"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-black font-semibold mb-2">Address <span className="text-gray-500">(Optional)</span></label>
                        <input
                            type="text"
                            defaultValue={address}
                            placeholder="Your address"
                            {...register("address", { required: "Address is required" })}
                            className="w-full px-4 py-2 rounded shadow bg-white"
                        />
                    </div>
                    <div>
                        <label className="block text-black font-semibold mb-2">
                            Mobile Number
                        </label>
                        <input
                            type="tel"
                            defaultValue={mobileNumber}
                            placeholder="Your mobile number"
                            {...register("mobile", {
                                required: "Mobile number is required",
                                pattern: {
                                    value: /^[0-9]{10,15}$/,
                                    message: "Enter a valid mobile number",
                                },
                            })}
                            className="w-full px-4 py-2 rounded shadow bg-white"
                        />
                        {errors.mobile && (
                            <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-black font-semibold mb-2">
                            Donation Amount
                        </label>
                        <input
                            type="number"
                            defaultValue={donate_amount}
                            placeholder="Donate your amount"
                            {...register("donationAmount", {
                                required: "Donation amount is required",
                                min: { value: 1, message: "Minimum donation amount is $1" },
                            })}
                            className="w-full px-4 py-2 rounded shadow bg-white"
                        />
                        {errors.donationAmount && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.donationAmount.message}
                            </p>
                        )}
                    </div>
                </div>
                <div className="text-center">
                    <input className="px-6 py-3 text-white font-bold bg-rose-600 hover:bg-rose-700 rounded w-full shadow transition-all duration-300 mt-2" type="submit" value="Update Now" />
                </div>
            </form>
        </div>
    );
};

export default UpdateDonation;