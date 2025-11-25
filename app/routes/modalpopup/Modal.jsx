import { FiX } from "react-icons/fi";
import "./modal.css";

const Modal = ({header,body,footer,fun}) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-white text-2xl animate-[popup_0.1s_ease-out]">
            <div className="header border-3 p-2 w-1/2 h-1/8 flex flex-row justify-between bg-blue-400">
                {header} <FiX size={35} onClick={() => fun((prev)=>!prev)} className="cursor-pointer" />
            </div>
            <div className="body border-3 p-2 w-1/2 h-1/4 bg-amber-300 ">
                {body}
            </div>
            <div className="footer  border-3 p-2 w-1/2 h-1/8 bg-blue-400">
                {footer}
            </div>
        </div>
    )
}

export default Modal