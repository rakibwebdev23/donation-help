import { useEffect, useState } from "react";
import DonateHelp from "../DonateHelp/DonateHelp";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const DonatesHelp = () => {
    const [donates, setDonates] = useState([]);
    const [showDonateLength, setShowDonateLength] = useState(6);

    useEffect(() => {
        fetch("donatesData.json")
            .then((res) => res.json())
            .then((data) => setDonates(data));
    }, []);

    return (
        <div className="container mx-auto px-4">
            <SectionTitle
                title="Donate to Help"
                subTitle="Your contribution can change lives. Browse our categories and make a difference."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {donates.slice(0, showDonateLength).map((donate) => (
                    <DonateHelp key={donate.id} donate={donate} />
                ))}
            </div>

            {/* See All Button */}
            {showDonateLength < donates.length && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => setShowDonateLength(donates.length)}
                        className="btn bg-blue-500 text-white font-bold px-6 py-2 rounded-md text-lg hover:bg-blue-600 transition duration-300 ease-in-out"
                    >
                        See All
                    </button>
                </div>
            )}
        </div>
    );
};

export default DonatesHelp;
