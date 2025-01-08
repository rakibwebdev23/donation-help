import { useState } from "react";
import ReactPaginate from "react-paginate";
import DonateHelp from "../DonateHelp/DonateHelp";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import useData from "../hooks/useData";

const DonatesHelp = () => {
    const [donates, isLoading, error] = useData() || {};
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 6;


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
        <div className="container mx-auto max-w-screen-xl px-4">
            <SectionTitle
                title="Donate to Help"
                subTitle="Your contribution can change lives. Browse our categories and make a difference."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentItems.map((donate) => (
                    <DonateHelp
                        key={donate.id || donate._id}
                        donate={donate}
                    />
                ))}
            </div>

            {/* Pagination Component */}
            <div className="flex justify-center my-16">
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={handlePageChange}
                    containerClassName={"pagination flex space-x-2"}
                    activeClassName={"bg-red-600 text-white px-4 py-2 rounded"}
                    pageClassName={"px-4 py-2 font-bold rounded cursor-pointer border"}
                    previousClassName={"px-4 py-2 font-bold rounded cursor-pointer border"}
                    nextClassName={"px-4 py-2 font-bold rounded cursor-pointer border"}
                    disabledClassName={"opacity-50 cursor-not-allowed"}
                />
            </div>
        </div>
    );
};

export default DonatesHelp;
