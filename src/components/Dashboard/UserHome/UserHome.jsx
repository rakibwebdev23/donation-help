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

                            <td>
                                {index + 1}
                            </td>
                            <td>
                            <div className="avatar">
                                <div className="mask mask-squircle h-12 w-12">
                                    <img
                                        src={donation.photoURL}
                                        alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            </td>
                            <td>
                                <h2>{donation.name}</h2>
                            </td>
                            <td>

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