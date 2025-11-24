import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

const LocalStorage = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  function handleClick(): void {
    setTheme(theme == "light" ? "dark" : "light");
  }
  const[bg,setBg] = useState("black");
  useEffect(()=>{
    setBg(theme=="light" ? "white" : "black");
  },[theme])

  return (
    <div className="outside-container min-h-screen text-red-600 flex flex-col justify-center items-center " style={{
      backgroundColor: bg,
    }}>
      <p className="text-4xl mb-4">Change Theme</p>
      <button className="button cursor-pointer text-4xl border p-1" type="button" onClick={() => handleClick()}>
        {theme == "dark" ? "light" : "dark"}
      </button>
    </div>
  )
}

export default LocalStorage