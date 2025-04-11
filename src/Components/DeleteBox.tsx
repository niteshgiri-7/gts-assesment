import { Dispatch, SetStateAction } from "react";

const DeleteBox = ({ setShowModal, clearCart }: { setShowModal: Dispatch<SetStateAction<boolean>>, clearCart: () => void }) => {
    const handleClearCart = () => {
        clearCart();
        setShowModal(false);
    }
    return (
        <div>
            <p className="text-start text-xl">Are you sure you want to <span className="font-bold">clear</span> your Cart?</p>
            <div className="w-full flex justify-between mt-5">
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-500 cursor-pointer"
                    onClick={handleClearCart}>
                    Confirm Delete
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-500 cursor-pointer"
                    onClick={() => setShowModal(false)}>
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default DeleteBox;
