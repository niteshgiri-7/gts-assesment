import { createContext } from "react";
import { CartContextType } from "../types/types";



export const CartContext = createContext<CartContextType | undefined>(undefined);




