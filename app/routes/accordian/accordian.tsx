import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
    const [buttonText,setButtonText] = useState<string>("Multi Select Disabled")
    const [array, setArray] = useState<number[]>([]);
    const [multi, setMulti] = useState<boolean>(false);
    function handleSubmit(id: number) {
        if (multi) {
            if (array.includes(id)) {
                let cpyarr = array.filter((temp) => temp != id)
                setArray(cpyarr);
            }
            else {
                let cpyarr = [...array];
                cpyarr.push(id)
                setArray(cpyarr);
            }
        }
        else {
            if (array.includes(id)) setArray([0]);
            else setArray([id]);
        }
    }
    function handleMultiSelect() {
        if ( multi ) setButtonText("Multi Select Enabled")
        else setButtonText("Multi Select Disabled")
        setMulti(!multi);
    }
    return (
        <div className="wrapper flex flex-col items-center justify-center text-2xl text-white min-h-screen ">
            <div className="accordian  p-4 rounded-3xl text-6xl mb-3"> Accordian </div>
            { (data && data.length > 0 ) ? data.map((item) => (<div className="flex flex-col items-center  pt-4 pl-6 pr-6 pb-2 rounded-3xl mb-4">
                <div className="text-red-400" > {item.question} </div>
                <button className="cursor-pointer text-xs text-gray-100 px-2 py-1 bg-gray-800 rounded-sm hover:bg-blue-500 focus:outline-none transition"
                    onClick={() => handleSubmit(item.id)}>+</button>
                {array.includes(item.id) && <div className="text-green-400">  {item.answer} </div>}
            </div>
            )) : <div> No data Found ! </div>}
            <button className="text-2xl cursor-pointer px-4 py-2 bg-gray-800 text-gray-100 rounded-md border border-gray-700 hover:bg-gray-700 transition"
                onClick={() => handleMultiSelect()}> {buttonText} </button>
        </div>
    );
}