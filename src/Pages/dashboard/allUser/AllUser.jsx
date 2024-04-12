import { FaTrash, FaUsers } from "react-icons/fa";
import SectionTitle from "../../../components/sectiontitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";


const AllUser = () => {
    const axiosSecure = useAxios()
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const result = await axiosSecure.get('/users')
            return result.data;
        }

    })
    const handleMakeAdmin = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "are you sure!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        console.log(res.data)
                        refetch()
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `${user?.name} is admin now`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }
        })
        

    }

    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }

        })
    }
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <SectionTitle subHeading={'How many'} heading={'Manage all users'}></SectionTitle>
                <h3 className="text-2xl font-medium">Total User: {users.length}</h3>
                <div className="overflow-x-auto">

                    <table className="table">
                        {/* head */}
                        <thead className="py-5 text-white bg-[#D1A054]">
                            <tr className="rounded-2xl">
                                <th>
                                    #
                                </th>
                                <th className="text-lg font-semibold">Name</th>
                                <th className="text-lg font-semibold">Email</th>
                                <th className="text-lg font-semibold">Role</th>
                                <th className="text-lg font-semibold">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="">
                                                <h4 className="text-lg font-medium">{user.name}</h4>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{user.email}</div>
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>
                                    <td> {user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="btn bg-[#D1A054] text-white "><FaUsers></FaUsers></button>}</td>
                                    <th>
                                        <button onClick={() => handleDeleteUser(user)} className="btn bg-red-600 text-white "><FaTrash></FaTrash></button>
                                    </th>
                                </tr>)
                            }

                        </tbody>
                        {/* foot */}

                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUser;