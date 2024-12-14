import { useEffect, useState } from "react";
import DonateHelp from "../DonateHelp/DonateHelp";

const DonatesHelp = () => {
    const [donates, setDonates] = useState([]);
    const [showDonateLength, setShowDonateLength] = useState(6);

    useEffect(() => {
        fetch('donatesData.json')
            .then(res => res.json())
            .then(data => setDonates(data))
    }, []);

    return (
        <div>
            <div className="grid md:grid-cols-3">
                {
                    donates.slice(0, showDonateLength).map(donate => <DonateHelp
                        key={donate.id}
                        donate={donate}
                    ></DonateHelp>)
                }
            </div>
            <div className={`flex items-center ${showDonateLength === donates.length ? 'hidden' : ''}`}>
                <button onClick={() => setShowDonateLength(donates.length)} className="btn btn-primary font-bold border-none text-xl hover:bg-blue-500 mx-auto mb-4">See All</button>
            </div>
        </div>
    );
};

export default DonatesHelp;