import { FaAd, FaCalendar, FaCalendarCheck, FaHome, FaShopify, FaShoppingCart, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoMail } from "react-icons/io5";
import useCart from "../hooks/useCart";



const Dashboard = () => {
    const [cart]= useCart()
    return (
        <div className="flex">
            <div className="w-72 min-h-screen bg-[#D1A054] px-8 py-10 space-y-8">
                <div>
                    <h3 className="text-2xl font-semibold uppercase">Bistro boss</h3>
                    <p className=" text-xl font-medium">r e s t a u r a n t</p>
                </div>
                {/* nav menu container */}
                <div className=" pb-4 border-b-2 border-white">
                    <ul className="space-y-5 mb-4">
                        <li className="text-lg font-semibold uppercase">
                            <NavLink to={'/dashboard/useHome'}>
                                <span className="inline-flex mr-2 text-lg "><FaHome></FaHome></span>
                                User Home
                            </NavLink>
                        </li>
                        <li className="text-lg font-semibold uppercase">
                            <NavLink to={'/dashboard/cart'}>
                                <span className="inline-flex mr-2 text-lg "><FaShoppingCart></FaShoppingCart></span>
                                My Cart({cart.length})
                            </NavLink>
                        </li>
                        <li className="text-lg font-semibold uppercase">
                            <NavLink to={'/dashboard/reservation'}>
                                <span className="inline-flex mr-2 text-lg "><FaCalendar></FaCalendar></span>
                                reservation
                            </NavLink>
                        </li>
                        <li className="text-lg font-semibold uppercase">
                            <NavLink to={'/dashboard/payment'}>
                                <span className="inline-flex mr-2 text-lg "><FaWallet></FaWallet></span>
                                Payment history
                            </NavLink>
                        </li>

                        <li className="text-lg font-semibold uppercase">
                            <NavLink to={'/dashboard/review'}>
                                <span className="inline-flex mr-2 text-lg "><FaAd></FaAd></span>
                                add review
                            </NavLink>
                        </li>
                        <li className="text-lg font-semibold uppercase">
                            <NavLink to={'/dashboard/booking'}>
                                <span className="inline-flex mr-2 text-lg "><FaCalendarCheck></FaCalendarCheck></span>
                                My booking
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="space-y-3 text-lg font-medium">
                        <li>
                            <NavLink to={'/'}>
                                <span className="inline-flex mr-2 text-lg "><FaHome></FaHome></span>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/menu'}>
                                <span className="inline-flex mr-2 text-lg "><FiMenu /></span>
                                menu
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/shop/:category'}>
                                <span className="inline-flex mr-2 text-lg "><FaShopify></FaShopify></span>
                                shop
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/contact'}>
                                <span className="inline-flex mr-2 text-lg "><IoMail /></span>
                                contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            {/* outlet  for the different routes under dashboard */}
            <div className="p-5 flex-1">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;