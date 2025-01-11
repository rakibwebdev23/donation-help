import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";

const ShowInformation = () => {
    const donate = useLoaderData();
    const { category_name, img, category_title, description, donate_amount } = donate || {};

    const [isModalOpen, setIsModalOpen] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset } = useForm();

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const onSubmit = (data) => {
        console.log(data);
        alert("Checkout Successful!");
        reset(); // Reset the form after successful submission
        setIsModalOpen(false); // Close the modal
    };

    return (
        <>
            <div className="max-w-screen-xl mx-auto px-4 lg:px-6">
                <div className="w-full mt-8 mx-auto p-8 shadow-lg rounded-lg border border-gray-200">
                    <div className="flex flex-col items-center text-center">
                        <img
                            src={img}
                            alt={category_title || "Category Image"}
                            className="w-full h-[300px] object-cover rounded-lg shadow-md mb-6"
                        />
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-rose-600">{category_name}</h2>
                        <h3 className="text-xl lg:text-2xl text-indigo-600 mt-2 font-medium">{category_title}</h3>
                    </div>
                    <div className="mt-6 space-y-4">
                        <p className="text-lg lg:text-2xl font-semibold text-gray-700">
                            <span className="text-indigo-600">Donation Amount:</span> $ {donate_amount}
                        </p>
                        <p className="text-gray-800 leading-relaxed">
                            {description || "No description available."}
                        </p>
                    </div>
                    <div className="mt-8 text-center">
                        <button
                            onClick={toggleModal}
                            className="px-6 py-3 text-white font-bold bg-rose-600 hover:bg-rose-700 rounded-lg shadow transition-all duration-300"
                        >
                            Donate Now
                        </button>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
                        <button
                            onClick={toggleModal}
                            className="absolute top-4 right-4 text-white text-xl font-bold bg-red-600 py-1 px-2 rounded"
                        >
                            ✕
                        </button>
                        <h2 className="text-xl font-bold text-gray-800 text-center mb-4">Donate Information</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                                <input
                                    type="text"
                                    {...register("name", { required: "Name is required" })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-rose-500 focus:border-rose-500"
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                                <input
                                    type="email"
                                    {...register("email", { required: "Email is required" })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-rose-500 focus:border-rose-500"
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Address</label>
                                <input
                                    type="text"
                                    {...register("address", { required: "Address is required" })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-rose-500 focus:border-rose-500"
                                />
                                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Mobile Number</label>
                                <input
                                    type="tel"
                                    {...register("mobile", {
                                        required: "Mobile number is required",
                                        pattern: {
                                            value: /^[0-9]{10,15}$/,
                                            message: "Enter a valid mobile number",
                                        },
                                    })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-rose-500 focus:border-rose-500"
                                />
                                {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>}
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Donation Amount</label>
                                <input
                                    type="number"
                                    {...register("donationAmount", {
                                        required: "Donation amount is required",
                                        min: { value: 1, message: "Minimum donation amount is $1" },
                                    })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-rose-500 focus:border-rose-500"
                                />
                                {errors.donationAmount && <p className="text-red-500 text-sm mt-1">{errors.donationAmount.message}</p>}
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="px-6 py-3 text-white font-bold bg-rose-600 hover:bg-rose-700 rounded-lg shadow transition-all duration-300"
                                >
                                    Checkout
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default ShowInformation;
