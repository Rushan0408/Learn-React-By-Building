import MenuItem from "./MenuItem";

interface menu {
  label : string;
  to : string;
  children?: menu[];
}
interface prop {
    menus : menu[]
}

const MenuList = ( {menus } : prop ) => {
    return (
        <ul>
            {menus && menus.length > 0 ? (
                menus.map((item,key) => (
                    <MenuItem key={item.label} item={item} /> 
                ))
            )
            : null}
        </ul>
    )
}

export default MenuList
