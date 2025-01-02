import { useLoaderData } from "react-router-dom";

const ShowInformation = () => {
    const information = useLoaderData();
    console.log(information);
    
    return (
        <div>
            
        </div>
    );
};

export default ShowInformation;