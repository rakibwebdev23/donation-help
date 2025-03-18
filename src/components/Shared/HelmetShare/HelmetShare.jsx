import { Helmet } from "react-helmet-async";

const HelmetShare = ({caption}) => {
    return (
        <div>
            <Helmet>
                <title>{caption} - CFBD</title>
            </Helmet>
        </div>
    );
};

export default HelmetShare;