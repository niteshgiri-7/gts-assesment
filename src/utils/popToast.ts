import toast from "react-hot-toast";

const popToastOnClick = () => {
  console.log("clicked");
  toast.error("Sorry Captain,Feature not implemented ");
};

export default popToastOnClick;
