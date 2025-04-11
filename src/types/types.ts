export interface IProduct{
    readonly _id:string;
    name:string;
    price:number;
    stock:number;
    category:string;
    photo:{
        secure_url:string;
    }
}

export interface IError{
    message:string;
    statusCode:number;
}


export interface IgetProductResponse{
    success:boolean;
    Products:IProduct[];
    message:string;
}

export interface CartItem extends IProduct {
    quantity?: number;
    total?:number;
  }
  
export interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    increment: (id: string) => void;
    decrement: (id: string) => void;
    removeItem:(id:string)=>void;
    clearCart: () => void;
  }