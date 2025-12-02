import { useState } from "react";
import QRCode from "react-qr-code";

const Qrgenerator = () => {
    const [qrcode, setQrCode ] = useState<string>("");
    const [value, setValue] = useState<string>("");
  function handleClick(): void {
    setQrCode(value);
    setValue('');
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-5xl mb-4"> QR code Generator </h1>
        <div>
          <input className="border mb-4" 
            type="text" 
            placeholder="Enter text" 
            value={value} 
            onChange={(e) => setValue(e.target.value)}/>
          <button className="border cursor-pointer" 
                  onClick={()=>handleClick()} >
            Submit
          </button>
        </div>
        <QRCode  className="border" value = {qrcode} />
    </div>
  )
}

export default Qrgenerator