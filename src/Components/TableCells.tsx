import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import { CartItem } from "../types/types";

interface ProductCellPropsType {
    item: CartItem;
  }
  
  interface QtyPropsType extends ProductCellPropsType {
    onDecrement: (id: string) => void;
    onIncrement: (id: string) => void
  }
  
  export const ProductCellValue = ({ item }: ProductCellPropsType) => (
    <div className="flex items-center">
      <div className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0">
        <img
          className="h-full w-full rounded-md object-cover"
          src={item.photo.secure_url || "/placeholder.svg"}
          alt={item.name}
        />
      </div>
      <div className="ml-2 sm:ml-4">
        <div className="text-xs sm:text-sm font-medium text-gray-900 truncate max-w-[120px] sm:max-w-none">
          {item.name}
        </div>
      </div>
    </div>
  );
  
  
  export const QuantityCellValue = ({ item, onDecrement, onIncrement }: QtyPropsType) => (
    <div className="flex ">
      <button
        className="text-gray-500 focus:outline-none focus:text-gray-600 p-0.5 sm:p-1"
        onClick={() => onDecrement(item._id)}
        aria-label="Decrease quantity"
      >
        <BiMinusCircle className="text-lg sm:text-xl" />
      </button>
      <span className="text-gray-700 mx-1 my-auto sm:mx-2 text-xs sm:text-sm">{item.quantity}</span>
      <button
        className="text-gray-500 focus:outline-none focus:text-gray-600 p-0.5 sm:p-1"
        onClick={() => onIncrement(item._id)}
        aria-label="Increase quantity"
      >
        <BiPlusCircle className="text-lg sm:text-xl" />
      </button>
    </div>
  );