import axios from "axios";
const Axios = axios.create({
    baseURL:import.meta.env.VITE_PRODUCT_API,
});


export default Axios;