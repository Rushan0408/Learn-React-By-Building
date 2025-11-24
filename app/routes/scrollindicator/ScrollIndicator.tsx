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
    const [progress , setProgress] = useState<number>(0);

    useEffect(() => {
        if (typeof window === "undefined") return;

        function handleScroll() {
            const scrollTop = window.scrollY || window.pageYOffset;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            const progress = Math.abs(Math.round((scrollTop / docHeight) * 100)-1);
            console.log(progress);
            setProgress(progress);
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    useEffect(() => {
        async function apicall() {
            const res = await fetch("https://dummyjson.com/products");
            const json = await res.json();
            setData(json);
        }
        apicall();
    }, []);

    useEffect(() => console.log(data), [data]);

    return (<>
        <div className=" flex flex-col fixed top-0 left-0 w-full bg-amber-300 p-2">
            <div style={{ width: progress + "%" }} className="bg-blue-600 h-6 border"></div>
            <h1 className="text-3xl text-center">Scroll Indicator</h1>
            
        </div>
        <div className="flex flex-col min-h-screen w-screen justify-center items-center mt-20">
            <div>
                {data?.products.map((item, key) => (
                    <div key={key} className="border text-5xl p-1 m-3">
                        {item.id} {item.title}
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default ScrollIndicator;
