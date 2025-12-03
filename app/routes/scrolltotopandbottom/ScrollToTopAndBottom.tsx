import { useRef } from "react";
import useFetch from "../customhooks/hooks/useFetch";

export default function ScrollToTopAndBottom() {
    const { data, error, loading } = useFetch<any>("https://dummyjson.com/products?limit=100");

    const bottomRef = useRef<HTMLDivElement | null>(null);

    function handleScrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    function handleScrollToBottom() {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: "smooth" });
        }

    }

    if (error) {
        return <h1>Error occured ! Please try again.</h1>;
    }

    if (loading) {
        return <h1>Loading ! Please wait</h1>;
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl mb-2 font-medium">Scroll To Top And Bottom Feature</h1>
            <h3 className="text-3xl mb-3">This is the top section</h3>
            <button className="mb-3  font-medium border p-2 bg-blue-400 rounded text-white hover:bg-blue-500 cursor-pointer" onClick={handleScrollToBottom}>Scroll To Bottom</button>
            <ul className="flex flex-col items-center" style={{ listStyle: "none" }}>
                {data && data.products && data.products.length
                    ? data.products.map((item: any) => <li>{item.title}</li>)
                    : null}
            </ul>
            <button className="mb-3 font-medium mt-3 border p-2 bg-blue-400 rounded text-white hover:bg-blue-500 cursor-pointer" onClick={handleScrollToTop}>Scroll To Top</button>
            <div ref={bottomRef}></div>
            <h3 className="text-3xl mb-3" >This is the bottom of the page</h3>
        </div>
    );
}