import { useState } from "react";
import DonateHelp from "../DonateHelp/DonateHelp";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";

const DonatesHelp = () => {
    const axiosPublic = useAxiosPublic();
    const [showDonateLength, setShowDonateLength] = useState(6);

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

    return (
        <div className="container mx-auto px-4">
            {/* Section Title */}
            <SectionTitle
                title="Donate to Help"
                subTitle="Your contribution can change lives. Browse our categories and make a difference."
            />

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {donates.slice(0, showDonateLength).map((donate) => (
                    <DonateHelp
                        key={donate.id || donate._id} // Ensure unique key
                        donate={donate}
                    />
                ))}
            </div>

            {/* Show All Button */}
            {showDonateLength < donates.length && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => setShowDonateLength(donates.length)}
                        className="bg-cyan-600 text-white py-3 px-14 text-base font-semibold border-none rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-cyan-700"
                    >
                        See All
                    </button>
                </div>
            )}
        </div>
    );
};

export default DonatesHelp;
