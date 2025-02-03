import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaTrash, FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";

const UserHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: donations = [], refetch } = useQuery({
        queryKey: ["donations", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/donation/${user?.email}`);
            return res.data;
        }
    });

    const handleDeleteDonation = async (id) => {
        Swal.fire({
            title: "Confirm Deletion",
            text: "Are you sure you want to delete this donation?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#6c757d",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
            showLoaderOnConfirm: true,
            preConfirm: async () => {
                try {
                    const res = await axiosSecure.delete(`/donation/${id}`);
                    if (res.data.deletedCount > 0) {
                        refetch();
                        return Swal.fire({
                            title: "Deleted!",
                            text: "The donation has been removed successfully.",
                            icon: "success",
                            timer: 2000,
                            showConfirmButton: false,
                        });
                    } else {
                        throw new Error("Deletion failed. Please try again.");
                    }
                } catch (error) {
                    return Swal.fire({
                        title: "Error!",
                        text: error.message || "Something went wrong. Please try again.",
                        icon: "error",
                    });
                }
            }
        });
    };
    

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="px-6 py-4 bg-gradient-to-r from-purple-600 to-rose-600">
                    <h2 className="text-3xl font-extrabold text-white text-center">
                        My Donations
                    </h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    #
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Image
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Category
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Title
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Donation
                                </th>
                                <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {donations.map((donation, index) => (
                                <tr
                                    key={donation._id}
                                    className="hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {index + 1}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-12 w-12">
                                                <img
                                                    className="h-12 w-12 rounded-full object-cover"
                                                    src={donation.img}
                                                    alt={donation.category_title}
                                                />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {donation.category_name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {donation.category_title}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-semibold">
                                        ${donation.donate_amount}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                        <div className="flex justify-center space-x-3">
                                            <button className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
                                                <FaEdit size={16} />
                                            </button>
                                            <button onClick={() => handleDeleteDonation(donation._id)} className="text-red-500 hover:text-red-700 transition-colors duration-200">
                                                <FaTrash size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {donations.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                        No donations found
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserHome;