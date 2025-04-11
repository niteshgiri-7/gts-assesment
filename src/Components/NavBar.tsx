import { FaShoppingCart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import userImage from "../assets/userImg.png";
import { MdLogout } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import popToastOnClick from "../utils/popToast";
import useCart from "../hooks/useCart";
import { CartContextType } from "../types/types";
const NavBar = () => {
    const location = useLocation();
    const numOfCartItems = (useCart() as CartContextType)?.cartItems?.length ||0;
    return (
        <div className="w-full flex justify-between items-center">
            <img src="/logo.png" alt="logo" />
            <div className="flex items-center gap-3">
                <ul className="flex gap-10 items-center">
                    <Link to="/home">
                        <li className={`font-semibold text-lg cursor-pointer ${location.pathname==="/home"?"text-blue-600":""}`}>Home</li>
                    </Link>
                    <Link to="/cart">
                        <li className="relative">
                            <FaShoppingCart className={`text-2xl cursor-pointer ${location.pathname==="/cart"?"text-blue-600":""}`} />
                            <div className="w-[20px] h-[20px] bg-red-600 rounded-full absolute -top-1 -right-2 flex justify-center items-center p-2 text-white font-semibold">
                                {numOfCartItems}
                            </div>
                        </li>
                    </Link>
                </ul>
                <div className="w-[2px] h-[30px] bg-gray-600 ml-2" />
                <div className="md:flex p-1 gap-3 hidden md:visible">
                    <img src={userImage} alt="userImg" />
                    <div className="flex-col font-bold">
                        <p>Nitesh Giri</p>
                        <div className="flex text-gray-600 font-light">
                            <FaLocationDot />
                            <span>Kathmandu,Nepal</span>
                        </div>
                    </div>
                </div>
                <button className="flex gap-2 items-center  bg-[#2563EB] text-white rounded-md px-3 py-2 cursor-pointer hover:bg-blue-300]" onClick={popToastOnClick}>
                    Logout
                    <MdLogout className="text-xl" />
                </button>
            </div>
        </div>
    )
}

export default NavBar
