import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UserHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: donations = [] } = useQuery({
        queryKey: ["donations", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/donation/${user?.email}`);
            return res.data;
        }
    });

    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        donations.map((donation, index) => <tr key={donation._id}>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <h2>{ donation.name}</h2>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default UserHome;