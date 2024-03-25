import { FaTrash } from "react-icons/fa";
import SectionTitle from "../../components/sectiontitle/SectionTitle";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios/useAxios";


const MyCart = () => {
    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((total, curr) => total + curr.price, 0)
    const axiosSecure = useAxios()

    const handleDelete = id => {
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

                axiosSecure.delete(`/carts/${id}`)
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
        });
    }
    return (
        <div className="max-w-7xl mx-auto">
            <SectionTitle subHeading={'my cart'} heading={'wanna add more'}></SectionTitle>
            <div>
                <h3 className="text-2xl font-medium">Total item: {cart.length}</h3>
                <h3 className="text-2xl font-medium">Total Price:${totalPrice}</h3>
                <button className="btn btn-warning">pay</button>
            </div>
            <div className="overflow-x-auto">

                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Item image</th>
                            <th>Item name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="font-bold">{item.menuName}</div>
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>{item.price}$</td>
                                <th>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-xs"><FaTrash></FaTrash></button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                    {/* foot */}

                </table>
            </div>
        </div>
    );
};

export default MyCart;