import { useEffect, useState } from "react";
import { getCardData } from "../../utilities/storage";
import { useLoaderData } from "react-router-dom";
import Donate from "../Donate/Donate";

const Donation = () => {
    const totalDonations = useLoaderData();
    const [donates, setDonates] = useState([]);
    const [donateSeeAll, setDonateSeeAll] = useState(4);

    useEffect(() => {
        const getDonates = getCardData();
        if (totalDonations.length > 0) {

            const storedDonations = [];
            for (const id of getDonates) {
                const donate = totalDonations.find(donate => donate.id === id);
                if (donate) {
                    storedDonations.push(donate)
                }
            }
            setDonates(storedDonations)
        }

    }, [totalDonations]);
    return (
        <div>
            <div className="grid lg:grid-cols-2 gap-6 mt-10 lg:px-6 px-4">
                {
                    donates.slice(0, donateSeeAll).map(donate => <Donate
                        key={donate.id}
                        donate={donate}
                    ></Donate>)
                }
            </div>
            <div className={`text-center m-6 ${donateSeeAll === donates.length? 'hidden' : ''}`}>
                <button onClick={() => setDonateSeeAll(donates.length)} className="bg-blue-500 text-white font-bold px-5 rounded-lg py-2 hover:bg-red-400">See All</button>
            </div>
        </div>
    );
};

export default Donation;