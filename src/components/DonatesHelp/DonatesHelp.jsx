import { useState } from "react";
import ReactPaginate from "react-paginate";
import DonateHelp from "../DonateHelp/DonateHelp";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";

const DonatesHelp = () => {
    const axiosPublic = useAxiosPublic();
    const [currentPage, setCurrentPage] = useState(0); // Track current page
    const itemsPerPage = 6; // Number of items per page

    // Fetch data using React Query
    const { data: donates = [], isLoading, error } = useQuery({
        queryKey: ["donates"],
        queryFn: async () => {
            try {
                const res = await axiosPublic.get("/projects");
                return res.data;
            } catch (err) {
                throw new Error("Failed to fetch data");
            }
        },
    });

    // Handle loading state
    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-64">
                <span className="text-lg font-semibold">Loading...</span>
            </div>
        );
    }

    // Handle error state
    if (error) {
        return (
            <div className="flex items-center justify-center h-64">
                <span className="text-lg font-semibold text-red-500">
                    Error fetching data: {error.message}
                </span>
            </div>
        );
    }

    // Calculate items for the current page
    const offset = currentPage * itemsPerPage;
    const currentItems = donates.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(donates.length / itemsPerPage);

    // Handle page change
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <div className="container mx-auto px-4">
            <SectionTitle
                title="Donate to Help"
                subTitle="Your contribution can change lives. Browse our categories and make a difference."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {currentItems.map((donate) => (
                    <DonateHelp
                        key={donate.id || donate._id}
                        donate={donate}
                    />
                ))}
            </div>

            {/* Pagination Component */}
            <div className="flex justify-center mt-8">
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={handlePageChange}
                    containerClassName={"pagination flex space-x-2"}
                    activeClassName={"bg-indigo-600 text-white px-4 py-2 rounded-full"}
                    pageClassName={"px-4 py-2 font-bold rounded-full cursor-pointer border"}
                    previousClassName={"px-4 py-2 font-bold rounded-full cursor-pointer border"}
                    nextClassName={"px-4 py-2 font-bold rounded-full cursor-pointer border"}
                    disabledClassName={"opacity-50 cursor-not-allowed"}
                />
            </div>
        </div>
    );
};

export default DonatesHelp;
