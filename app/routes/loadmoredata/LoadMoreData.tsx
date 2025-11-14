import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

export default function LoadMoreData() {

    const [limit,setLimit] = useState<number>(12);
    const [skip, setSkip] = useState<number>(0);
    const [loadMoreButton,setLoadMoreButton] = useState<boolean>(true);
    const [products,setProducts] = useState<Product[]>([]);
    
    useEffect(() => {
        async function load() {
            const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
            const data = await response.json();
            setProducts(prev => [...prev, ...data.products]);
            console.log(products);
        }
        load();
    }, [skip,limit]); 

    function handleClick() {
        setSkip((prev) => prev + limit)  
        if ( products.length > 50 ) setLoadMoreButton(false);
    }

    return (
        <div className="flex flex-col" >
            <h1 className="text-center text-4xl"> Products : </h1>
            <div className="grid grid-cols-4 grid-rows-4 min-h-screen border" >
                {(products && products.length>0) ? ( products.slice(0, 50).map((item,key) => (
                    key <= 50 && <div key={key}  className="border flex flex-col justify-center items-center">
                        <div className=" h-50 w-50 rounded-lg  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${item.thumbnail})` }}></div>
                        <h1 className=""> {item.title} </h1>
                    </div>
                ))) : <h1> No Products to show </h1>
                }
            </div>
            {loadMoreButton && <button className="button cursor-pointer "onClick={() => handleClick()} >Load More Products</button>}
        </div>
    )
}
