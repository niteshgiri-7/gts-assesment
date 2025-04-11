import { FaStar } from "react-icons/fa";
import { CartContextType, IProduct } from "../types/types"
import { FaCirclePlus } from "react-icons/fa6";
import useCart from "../hooks/useCart";
import { memo} from "react";


const ProductCard = memo(({product}:{product:IProduct}) => {
    const {addToCart} = useCart() as CartContextType;
    return (
        <div className="min-w-[245px] max-w-[245px] min-h-[300px] max-h-[300px] mt-5 bg-white rounded-lg shadow-lg shadow-gray-300 overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 p-2 cursor-pointer hover:bg-blue-50">
         <div className="h-[55%] w-full rounded-lg">
            <img src={product.photo.secure_url} alt="productImg" className="min-h-full max-h-full min-w-full object-contain border-1 border-gray-300 rounded-lg"/>
         </div>
         <p className="mt-1 text-blue-600 font-bold text-sm">{product.category.charAt(0).toUpperCase()+product.category.slice(1)}</p>
         <div className="flex w-full pr-2 justify-between">
            <span>{product.name}</span>
            <div className="flex justify-center items-center gap-2">
                <FaStar className="text-yellow-300"/>
                <span>4.5</span>
            </div>
         </div>
         <p className="mt-2">In Stock:<span>{product.stock}</span></p>
         <div className="mt-3 flex justify-between">
            <span className="font-bold">Rs.{product.price*103}</span>
            <button className="cursor-pointer" onClick={()=>addToCart(product)}>
            <FaCirclePlus className="text-[#2563EB] text-2xl mr-2"/>
            </button>
            </div>
      </div>
    )
})

export default ProductCard;
