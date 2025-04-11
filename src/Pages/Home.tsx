import { ChangeEvent, useState } from "react";
import { IoFilterSharp } from "react-icons/io5";
import { MdSearch } from "react-icons/md";
import ProductCard from "../Components/ProductCard";
import Shimmer from "../Components/Shimmer";
import useErrorNotification from "../hooks/useErrorNotification";
import useProducts from "../hooks/useProducts";
import { categories } from "../utils/categories";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchText, setSearchText] = useState<string>("");
  const { products, isLoading, error } = useProducts();
  useErrorNotification(error.isError, error.message);

  const filteredProducts = products?.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = selectedCategory==="all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }) || [];


  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  }
   
  return (
    <div className="py-[1.5rem]">
      {/*section:- the searchBar and the category option */}
      <section className="px-[3rem]">
        <div>
          <div className="w-full flex gap-4">
            <div className="w-[80%] relative">
              <MdSearch className="absolute text-3xl text-gray-500 top-1/2 left-2 -translate-y-1/2" />
              <input className="py-4 px-10 bg-white rounded-lg w-full font-bold border-none outline-0" placeholder="Search Products..."
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearch(e)} 
                />
            </div>
            <div className="w-fit p-2 bg-white rounded-lg flex justify-center items-center font-semibold">
              <IoFilterSharp />
              <select onChange={(e)=>handleCategoryChange(e.target.value)} className="border-none outline-0">
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className=" mt-5 flex justify-around lg:w-[60%] lg:justify-between flex-wrap">
            {categories.map((category, index) => (
              <button key={index} className={` px-6 py-2 rounded-lg hover:bg-gray-200 hover:font-semibold cursor-pointer mt-2 ${selectedCategory === category ? "bg-[#2563EB] text-white hover:text-black" : "bg-white"}`} onClick={() => handleCategoryChange(category)}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>))}
          </div>
        </div>
      </section>
      <h1 className="px-[3rem] mt-10 mb-10 text-3xl font-semibold">Products</h1>
      {/* section:the products cards */}
      <section className="w-full">

        {
          isLoading 
          ?
          <div className=" px-[3rem] flex justify-center flex-wrap gap-10 w-[95vw] mx-auto">
           {Array.from({length:10}).map((_,index)=>(
            <Shimmer key={index}/>
           ))}
          </div>
          :
          (filteredProducts && filteredProducts.length > 0)
            ?
            <div className=" px-[3rem] flex justify-center flex-wrap gap-10 w-[95vw] mx-auto">
              {
                filteredProducts.map(product => (<ProductCard key={product._id} product={product} />))
              }
            </div>
            :
            <div className="w-full h-[20vh] flex justify-center items-center">
              <h1 className="text-4xl font-bold">Product Not Found</h1>

            </div>
        }
      </section>
    </div>
  )
}

export default Home;
