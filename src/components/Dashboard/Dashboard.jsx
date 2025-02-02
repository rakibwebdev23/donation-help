import { Link, Outlet } from "react-router-dom";
import Container from "../Container/Container";

const Dashboard = () => {
    return (
        <Container>
            <div className="lg:flex items-center">
                <div className="w-1/4 bg-rose-300">
                    <Link to="/dashboard/userHome">User Home</Link>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </Container>
    );
};

export default Dashboard;