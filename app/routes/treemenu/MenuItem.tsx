import { useState } from "react";
import MenuList from "./MenuList";
import { FaPlus , FaMinus } from 'react-icons/fa6'

interface menu {
    label: string;
    to: string;
    children?: menu[];
}

interface prop {
    item: menu;
}

const MenuItem = ({ item }: prop) => {

    const [displaylist, setDisplayList] = useState<boolean>(false);
    const [ icon, setIcon ] = useState<boolean>(true);

    function handleClick() {
        setDisplayList((prev) => !prev);
        setIcon((prev) => !prev);
    }

    return (
        <li className="flex flex-col">
            <div className="flex flex-row items-center">
                <p>{item.label}</p>
                { item.children && item.children.length > 0 ? icon ? <FaPlus className="cursor-pointer" size={12} onClick={ () => handleClick() }/> 
                 : <FaMinus className="cursor-pointer" size={12} onClick={ () => handleClick() } /> : null 
                }
                
            </div>
            {item.children && item.children.length > 0 && displaylist ?
                <MenuList menus={item.children} />
            : null}
        </li>
    )
}

export default MenuItem