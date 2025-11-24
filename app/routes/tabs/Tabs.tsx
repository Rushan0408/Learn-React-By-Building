import { useState, type JSX } from "react"

interface prop {
    label: string,
    content: JSX.Element,
}

interface propContent {
    tabsContent: prop[]
}

const Tabs = ({ tabsContent = [] }: propContent) => {

    console.log(tabsContent);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    function handleClick(index : number): void {
        setCurrentIndex(index);
    }

    return (
        <div className="flex flex-col items-center mt-8">
            <div className="flex flex-row  ">
                {tabsContent.map((item, index) => (
                <div key={item.label} onClick={()=>handleClick(index)} className="cursor-pointer border text-5xl p-2">
                    {item.label}
                </div>
            ))}
            </div>
            <div className="text-3xl mt-6">
                {tabsContent[currentIndex].content}
            </div>
        </div>
    )
}

export default Tabs