import { NavLink } from "react-router";

export default function Home() {
  return (
  <div className=" text-5xl p-8 bg-gray-100 min-h-screen">
    <div className="text-center p-2"> 
      <h1 > List of React Projects : </h1> 
    </div>
    <div className="text-center p-2" > 
      <NavLink to='/accordian'> Accordian </NavLink>
    </div>
  </div>
  );
}
