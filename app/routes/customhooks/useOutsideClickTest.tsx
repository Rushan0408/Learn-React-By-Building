import { useRef, useState } from "react";
import useOutsideClick from "./hooks/useOutsideClick";

const useOutsideClickTest = () => {
    const[showContent,setShowContent] = useState<Boolean>(false);
    const ref = useRef(null);
    useOutsideClick(ref,()=>setShowContent(false));

  return (
    <div className="flex justify-center items-center">
        <div ref={ref} className=" w-1/2 h-1/4 mt-40">
           { showContent ? <div className="border">
            <h1>Click outside to hide it </h1>
            <p> This is some hidden content</p>
            <p> This content only appears when u click the button</p>
           </div> :
            <button type="button" className="border cursor-pointer" onClick={()=>setShowContent(true)} > Click to show Content </button>}
        </div>
    </div>
  )
}
export default useOutsideClickTest