import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import Axios from "../axios/axiosInstance";
import { IError, IgetProductResponse, IProduct } from "../types/types";

const useProducts = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState({
    message: "",
    isError: false,
  });

  const [products,setProducts] = useState<IProduct[]|null>(null);

  useEffect(()=>{
         if(!products)
        getProducts();
  },[])


  const getProducts = async () => {
    try {
      setIsLoading(true);
      const { data, status } = await Axios.get<IgetProductResponse>(
        "/products/all"
      );
      if (status !== 200)
        throw new Error(`Failed to fetch Products with statusCode:${status}`);
     
      if(data.success){
        setProducts(data.Products);
      }
     
    } catch (error) {
      const axiosError = error as AxiosError<IError>;
      setError((prev) => ({
        ...prev,
        isError: true,
        message:
          axiosError.response?.data?.message ||
          (error as Error).message ||
          "Sorry! Something Went Wrong!",
      }));
    }
    finally{
        setIsLoading(false);
    }
  };
  return {isLoading,error,products};
};

export default useProducts;