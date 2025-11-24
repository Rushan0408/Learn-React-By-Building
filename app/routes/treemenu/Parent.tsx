import { menus } from "./data";
import MenuList from "./MenuList";

const Parent = () => {
  return (
    <MenuList menus={menus}/>
  )
}

export default Parent