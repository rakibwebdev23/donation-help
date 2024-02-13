import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="flex items-center mt-72">
            <div className="mx-auto">
                <h2>Oops!!</h2>
                <p>{error.statusText || error.message}</p>
                {
                    error.status === 404 && <div>
                        <Link to="/"><button className="btn btn-outline">Back To Home</button></Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default ErrorPage;