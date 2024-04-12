import { FaPen, FaTrash } from "react-icons/fa";
import SectionTitle from "../../../components/sectiontitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
import { Link } from "react-router-dom";


const ManageItem = () => {
    const [menu, , refetch] = useMenu()
    const axiosSecure = useAxios()

    const handleDeleteItem = (item) => {
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
                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: `${item.name} is Deleted!`,
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        })

    }
    return (
        <div>
            <SectionTitle subHeading={'hurry up'} heading={'manage all item'}></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Menu Name</th>
                                <th>Price</th>
                                <th>Edit Action</th>
                                <th>Delete action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                menu.map((item, index) => <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-16 h-16">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>{item.price}$</td>
                                    <td>
                                        <Link to={`/dashboard/updateItem/${item._id}`}><button className="btn bg-amber-500 text-white "><FaPen></FaPen></button></Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteItem(item)} className="btn bg-red-600 text-white "><FaTrash></FaTrash></button>
                                    </td>

                                </tr>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;