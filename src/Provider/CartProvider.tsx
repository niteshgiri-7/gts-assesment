import { ReactNode, useState } from "react";
import { CartItem } from "../types/types";
import { CartContext } from "../context/cartContext";
import toast from "react-hot-toast";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find((cartItem) => cartItem._id === item._id);
      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem._id === item._id ? { ...cartItem, quantity: cartItem.quantity! + 1 } : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    toast.success("Item Added To Cart!")
  };

  const increment = (id: string) => {
    setCartItems((prev) => prev.map((item) =>
      item._id === id ? { ...item, quantity: item.quantity! + 1 } : item
    )
    );
  };

  const decrement = (id: string) => {
    const item = cartItems.find((item)=>item._id===id);
    if(item?.quantity==1)
    return;
    setCartItems((prev) => prev.map((item) =>
      item._id === id ? { ...item, quantity: item.quantity! - 1 } : item
    )
    );
  };
  
  const removeItem =(id:string)=>{
    setCartItems((prev)=>prev.filter((item)=>item._id!==id));
  }

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, increment, decrement, clearCart ,removeItem }}>
      {children}
    </CartContext.Provider>
  );
};