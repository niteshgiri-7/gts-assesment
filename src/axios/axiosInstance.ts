import axios from "axios";
console.log("from instance",import.meta.env.VITE_PRODUCT_API)
const Axios = axios.create({
    baseURL:import.meta.env.VITE_PRODUCT_API,
});


export default Axios;