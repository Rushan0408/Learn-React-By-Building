import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating () {
    const [value,setValue] = useState<number>(-1);
    const [fixed,setFixed] = useState<number>(-1);
    return (
        <div className="star-rating flex flex-row justify-center items-center min-h-screen bg-gray-700">
            {
                [...Array(5)].map((item,index) => (
                    <FaStar key={index} color={ index <= value ? "gold" : "#ccc" } size={120} 
                        onClick={() =>  setFixed(index)  }
                        onMouseEnter={() => setValue(index)}
                        onMouseLeave={() => setValue(fixed) }
                    /> 
                ))
            }
        </div>
    );
}