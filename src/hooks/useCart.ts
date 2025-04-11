import { useContext } from "react"
import { CartContext } from "../context/cartContext"
import { CartContextType } from "../types/types";

const useCart = ():CartContextType|void=>{
    const context = useContext(CartContext);
    if(!context)
        return console.error("useCart is being used without a Provider");

    return context;
}

export default useCart;