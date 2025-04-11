import { ReactNode, SetStateAction } from "react";
import {RxCross2} from "react-icons/rx"
import { createPortal } from "react-dom";


const Modal = ({children,setShowModal}:{children:ReactNode,setShowModal:(value:SetStateAction<boolean>)=>void}) => {

  return createPortal(
    <div className="fixed inset-0 bg-black/50 backdrop:blur-sm z-50 flex justify-center items-center">
      
    <div className="bg-gray-50 p-6 rounded-lg shadow-md shadow-gray-200 w-full max-w-sm relative">
      <button className="absolute top-0 right-0 text-4xl" onClick={()=>setShowModal(false)}><RxCross2/>
      </button>
      {children}
    </div>
 
    </div>,
    document.getElementById("root-modal") as Element
  )
}

export default Modal;