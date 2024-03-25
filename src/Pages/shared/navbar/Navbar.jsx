import { Link, NavLink } from "react-router-dom";
import profile from '../../../assets/assets/others/profile.png'
import cartImg from '../../../assets/assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png'
import './navbar.css'
import { useContext, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { GlobalContext } from "../../../Provider/AuthProvider";
import Swal from 'sweetalert2'
import useCart from "../../../hooks/useCart";


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { logOut, user } = useContext(GlobalContext)
    const [cart]= useCart()
    const links = <>
        <li className="nav-link"><NavLink to={'/'}>Home</NavLink></li>
        <li className="nav-link"><NavLink to={'contact'}>Contact Us</NavLink></li>
        <li className="nav-link"><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
        <li className="nav-link"><NavLink to={'/menu'}>Our Menu</NavLink></li>
        <li className="nav-link"><NavLink to={'/shop/salad'}>Our Shop</NavLink></li>
    </>

    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "log out successful",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(err => console.error(err))

    }
    return (
        <div className="navbar fixed z-10 bg-opacity-60 justify-between bg-[#151515] text-[#ffffff] px-1 lg:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div onClick={() => setShowMenu(!showMenu)} tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        {
                            showMenu ? <span className="text-xl font-medium"><MdOutlineCancel /></span>
                                : <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        }

                    </div>
                    {
                        showMenu ? <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-yellow-300 rounded-box w-52 text-neutral">
                            {links}
                        </ul> : ''
                    }
                </div>
                <div className="">
                    <a href="/" className=" text-sm md:text-lg lg:text-xl block">BISTRO BOSS</a>
                    <span className="text-sm lg:text-lg">R e s t a u r  a n t</span>
                </div>
            </div>
            <div>
                <div className="hidden lg:flex">
                    <ul className=" menu-horizontal px-1 space-x-4">
                        {links}
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <img className="w-8 md:w-10 lg:w-10 rounded-full" src={cartImg} alt="" />
                            <span className="badge badge-sm indicator-item">{cart.length}</span>
                        </div>
                    </div>
                    <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body  text-neutral">
                            <span className="font-bold text-lg">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ml-4 ">
                    <div className=" flex justify-center items-center space-x-2">
                        <div>
                            {
                                user ? <button onClick={handleLogout}>Logout</button>
                                    : <Link to={'/login'}> <button>Sign In</button></Link>
                            }


                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">

                                <div className="w-8 md:w-10 lg:w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={profile} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-neutral">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;