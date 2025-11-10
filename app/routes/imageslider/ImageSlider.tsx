import { useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";
import { MdArrowBackIos } from "react-icons/md";

interface ImageData {
  imageUrlArray: string[];
}

export async function clientLoader(): Promise<ImageData> {
  const imageUrlArray = ["https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg",
    "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
    "https://images.unsplash.com/photo-1600357077527-930ccbaf7773?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGl0dGxlJTIwY2F0fGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
  ]
    ;
  return { imageUrlArray };
}

export default function ImageSlider({loaderData,}: {loaderData: ImageData;}) {
  const [index,setIndex] = useState<number>(0);
  function handleLeft () {
    if ( index > 0 ) setIndex(index-1);
  }
  function handleRight () {
    if ( index < loaderData.imageUrlArray.length-1 )setIndex(index+1);
  }
  return (
    <div className="flex min-h-screen w-screen justify-center items-center bg-red-300">
      <div className="h-96 w-96 rounded-lg shadow bg-cover bg-center bg-no-repeat flex justify-between items-center" style={{ backgroundImage: `url(${loaderData.imageUrlArray[index]})` }} >
        <BsArrowLeftCircle size={30} onClick={()=>handleLeft()}
          className="text-white hover:text-black text-4xl cursor-pointer" />
        <BsArrowRightCircle size={30} onClick={()=>handleRight()}
          className="text-white hover:text-black text-4xl cursor-pointer" />
      </div>
    </div>
  );
}
