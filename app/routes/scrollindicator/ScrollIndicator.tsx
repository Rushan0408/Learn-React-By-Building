import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
}

interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

const ScrollIndicator = () => {
  const [data, setData] = useState<ProductsResponse>();
  const [ylen,set]

  useEffect(() => {
    async function apicall() {
      const res = await fetch("https://dummyjson.com/products");
      const json = await res.json();
      setData(json);
    }
    apicall();
  }, []);

  useEffect(() => console.log(data), [data]);

  

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
        <h1 className="text-blue-500 text-4xl">Scroll Indicator</h1>
        <div>
            { data?.products.map((item,key)=>(
                <div key={key} className="border text-2xl p-1"> 
                    {item.id} {item.title}
                </div>
            ))  }
        </div>
    </div>
  );
};

export default ScrollIndicator;
