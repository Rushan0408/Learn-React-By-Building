import { useState } from "react";
import "./styles.css"

export default function ColorGenerator() {
    const [color, setColor] = useState<string>("#ffffff");

    function handleSubmitHex(): void {
        const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
        let color: string = "#";
        for (let i = 0; i < 6; i++) {
            let index = Math.floor(Math.random() * 16);
            color += arr[index];
        }
        setColor(color);
    }
    function handleSubmitRGB(): void {
        let arr = [];
        for ( let i = 0 ; i < 3 ; i++ ) arr.push( Math.floor(Math.random() * 256 ))
        let color:string = "rgb(" + arr[0] + "," + arr[1] + "," + arr[2] + ")";
        setColor(color);
    }
    function handleSubmitRandom(): void {
        color.charAt(0)  === '#' ? handleSubmitHex() : handleSubmitRGB(); 
    }

    return (
        <body style={{
            backgroundColor: color,
        }}>
            <div className="container flex flex-row justify-center border">
                <button className=" button border" onClick={() => handleSubmitHex()}> Create Hex Color </button>
                <button className=" button border" onClick={() => handleSubmitRGB()}>  Create RGB Color </button>
                <button className=" button border" onClick={() => handleSubmitRandom()}> Generate Random </button>
            </div>
            <div className="min-h-screen w-sceen flex justify-center items-center text-9xl"> {color} </div>    
        </body>

    );

}