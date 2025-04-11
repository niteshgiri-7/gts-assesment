import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartTable from "../Components/CartTable";
import useCart from "../hooks/useCart";
import { CartContextType } from "../types/types";
import popToastOnClick from "../utils/popToast";
import toast from "react-hot-toast";
import Modal from "../Components/Modal";
import DeleteBox from "../Components/DeleteBox";




const Cart = () => {
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const { cartItems, clearCart } = useCart() as CartContextType;
  const subTotal = cartItems.reduce((sum, item) => sum + (item.price * 103 * item.quantity!), 0);
  const deliveryCharge = 100;
  const total = subTotal + deliveryCharge;

  const handleDeleteAll = () => {
    if (!selectAll)
      return toast.error("Tick Select All First!");
    setShowModal(true);
  }

  return (
    <>
      {showModal && <Modal setShowModal={setShowModal} children={<DeleteBox setShowModal={setShowModal} clearCart={clearCart} />}></Modal>}
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 flex gap-2  items-center"><FaShoppingCart className="w-6 h-6" />Cart</h1>

        {cartItems.length > 0 ? (
          <>
            <CartTable cartItems={cartItems} />

            <div className="mb-5 flex justify-between py-[1.5rem] px-[1rem] w-full bg-white rounded-lg">
              <div>
                <input type="checkbox" id="selectAll" name="selectAll" checked={selectAll} onChange={() => setSelectAll(prev => !prev)} />
                <label htmlFor="selectAll" className="ml-2">Select All</label>
              </div>
              <button className="flex justify-center items-center gap-1 font-semibold cursor-pointer" onClick={handleDeleteAll}>
                <BiTrash />
                <span>Delete</span>
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h2>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-800">{subTotal}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Delivery Charge</span>
                  <span className="text-gray-800">{deliveryCharge}</span>
                </div>
                <div className="border-t border-gray-200 my-4"></div>
                <div className="flex justify-between mb-6">
                  <span className="text-lg font-semibold text-gray-800">Total</span>
                  <span className="text-lg font-semibold text-blue-600">Rs.{total}</span>
                </div>
                <button
                  className="block w-full bg-blue-500 hover:bg-blue-600 text-white text-center px-4 py-2 rounded-md transition-colors duration-300"
                  onClick={popToastOnClick}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center mb-8">
            <p className="text-gray-500 mb-4">Your cart is empty</p>
            <Link
              to="/home"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;