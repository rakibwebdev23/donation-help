import { useState } from "react";
import { useForm } from "react-hook-form";
import help1 from "../../assets/images/helpHand/help1.jpg";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Container from "../Container/Container";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Projects = () => {
    const [isSliderOpen, setIsSliderOpen] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const toggleSlider = () => {
        setIsSliderOpen(!isSliderOpen);
    };

    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: { "Content-Type": "multipart/form-data" }
        });

        if (res.data.success) {
            const projectDetails = {
                category_name: data.categoryName,
                category_title: data.categoryTitle,
                description: data.description,
                donate_amount: `${parseFloat(data.amount).toFixed(2)}`,
                img: res.data.data.display_url
            }
            console.log(projectDetails);
            const projectRes = await axiosSecure.post("/projects", projectDetails);
            console.log(projectRes.data);
            if (projectRes.data.insertedId) {
                reset();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "<h2 style='color:#4CAF50;'>🎉 Great Job!</h2>",
                    html: `
                        <p style="font-size:16px;color:#555;">
                            You have successfully created this project to help others! 🥳
                        </p>
                    `,
                    showConfirmButton: false,
                    timer: 2000, // Adjusted time
                    background: "#f9f9f9",
                    backdrop: `
                        rgba(0, 0, 0, 0.4)
                        left top
                        no-repeat
                    `,
                    customClass: {
                        popup: "swal-custom-popup",
                    },
                    didOpen: () => {
                        const swalContainer = Swal.getPopup();
                        if (swalContainer) {
                            swalContainer.style.border = "2px solid #4CAF50";
                            swalContainer.style.borderRadius = "10px";
                        }
                    }
                }).then(() => {
                    navigate('/');
                });
            }
        }



    };

    return (
        <Container>
            <div className="h-screen flex justify-center mx-auto lg:pt-0 pt-10">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="w-full md:w-1/2 flex-shrink-0">
                        <img
                            src={help1}
                            alt="Helping Hand"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/2 space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                            Empower Lives Through <br />
                            <span className="text-rose-600">Crowd Funding</span>
                        </h1>
                        <p className="text-lg text-black leading-relaxed">
                            Help us create a better tomorrow by contributing to those in need. Your generosity can provide
                            the resources and support that can change lives for the better. Together, we can make a difference!
                        </p>
                        <button
                            onClick={toggleSlider}
                            className="px-8 py-3 bg-rose-600 text-white font-medium rounded-lg shadow-md hover:bg-rose-700 transition duration-300"
                        >
                            Create Project
                        </button>
                    </div>
                </div>

                {/* Side Slider */}
                <div
                    className={`fixed top-0 right-0 h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-lg transform ${isSliderOpen ? "translate-x-0" : "translate-x-full"
                        } transition-transform duration-500 w-full md:w-1/2 z-50`}
                >
                    <button
                        onClick={toggleSlider}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
                    >
                        ✖
                    </button>

                    {/* Slider Content */}
                    <div className="px-8 py-6 space-y-4 bg-rose-200 h-screen">
                        <h3 className="lg:text-3xl font-semibold text-red-600 text-left">
                            Submit Your Project
                        </h3>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-black">
                                        Project Category
                                    </label>
                                    <input
                                        {...register("categoryName", { required: true })}
                                        type="text"
                                        className="w-full mt-1 p-3 rounded bg-white shadow-md"
                                        placeholder="Enter category name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-black">
                                        Project Title
                                    </label>
                                    <input
                                        {...register("categoryTitle", { required: true })}
                                        type="text"
                                        className="w-full mt-1 p-3 rounded bg-white shadow-md"
                                        placeholder="Enter category title"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-black">
                                    Needed Amount
                                </label>
                                <input
                                    {...register("amount", { required: true })}
                                    type="number"
                                    className="w-full mt-1 p-3 rounded bg-white shadow-md"
                                    placeholder="Enter amount needed"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-black">
                                    Description
                                </label>
                                <textarea
                                    {...register("description", { required: true })}
                                    className="w-full mt-1 p-3 rounded bg-white shadow-md"
                                    rows="4"
                                    placeholder="Enter description"
                                ></textarea>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-black">
                                    Upload Image
                                </label>
                                <input type="file" className="file-input file-input-bordered w-full max-w-xs"
                                    {...register("image", { required: true })}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 bg-red-600 text-white font-medium rounded-lg shadow-lg hover:bg-red-700 transition duration-300 "
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

                {/* Overlay */}
                {isSliderOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-40 z-40"
                        onClick={toggleSlider}
                    ></div>
                )}
            </div>
        </Container>
    );
};

export default Projects;
