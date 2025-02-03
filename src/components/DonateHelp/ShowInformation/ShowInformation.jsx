import { useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import moment from "moment";
import Container from "../../Container/Container";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const ShowInformation = () => {
  const donate = useLoaderData();
  const { category_name, img, category_title, description, donate_amount } = donate || {};
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { user } = useAuth();
  const location = useLocation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const toggleModal = () => {
    if (isModalOpen) {
      setIsVisible(false);
      setTimeout(() => setIsModalOpen(false), 300);
    } else {
      setIsModalOpen(true);
      setTimeout(() => setIsVisible(true), 10);
    }
  };

  const onSubmit = async (data) => {
    if (user && user?.email) {
      const donateInfo = {
        name: data.name,
        email: data.email,
        address: data.address,
        mobileNumber: data.mobile,
        img,
        category_name,
        category_title,
        date: moment().format('Do MMMM YYYY, h:mm:ss a'),
        donate_amount: Number(parseFloat(data.donationAmount).toFixed(2))
      };
      axiosSecure.post("/donation", donateInfo)
        .then(res => {
          if (res.data.insertedId) {
            reset();
            Swal.fire({
              icon: "success",
              title: "Thank You! 💖",
              text: "Your kindness is truly appreciated.",
              confirmButtonText: "OK",
              confirmButtonColor: "#e11d48",
              timer: 2000,
              customClass: {
                popup: "rounded-lg shadow-lg bg-white p-5 border border-rose-300",
                title: "text-2xl font-semibold text-rose-600",
                htmlContainer: "text-gray-600 text-base"
              },
              iconColor: "#e11d48",
              backdrop: "rgba(0, 0, 0, 0.3)",
              showCloseButton: true
            });
            navigate("/");
          }

        })
    }
    else {
      Swal.fire({
        title: "You are not Sign In",
        text: "Please Sign In to Donation",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sign In"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signin", { state: { from: location } })
        }
      });
    }
  };

  return (
    <>
      <Container>
        <div>
          <div className="w-full mt-8 mx-auto p-8 shadow-lg rounded-lg border border-gray-200">
            <div className="flex flex-col items-center text-center">
              <img
                src={img}
                alt={category_title || "Category Image"}
                className="w-full h-[300px] object-cover rounded-lg shadow-md mb-6"
              />
              <h2 className="text-3xl lg:text-4xl font-extrabold text-rose-600">
                {category_name}
              </h2>
              <h3 className="text-xl lg:text-2xl text-indigo-600 mt-2 font-medium">
                {category_title}
              </h3>
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
          <div
            className={`fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 
              transition-opacity duration-300 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"
              }`}
          >
            <div
              className={`relative bg-gray-200 rounded-lg shadow-lg p-6 w-full max-w-2xl 
              transform transition-transform duration-300 ease-in-out ${isVisible ? "scale-100" : "scale-95"
                }`}
            >
              <button
                onClick={toggleModal}
                className="absolute top-4 right-4 text-black text-xl font-bold rounded"
              >
                ✕
              </button>
              <h2 className="text-xl lg:text-2xl font-bold text-rose-600 text-center mb-4">
                Donate Information
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-black font-semibold mb-2">Name</label>
                  <input
                    type="text"
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
                  <input className="px-6 py-3 text-white font-bold bg-rose-600 hover:bg-rose-700 rounded w-full shadow transition-all duration-300 mt-2" type="submit" value="CheckOut" />
                </div>
              </form>
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default ShowInformation;