import { NavLink } from "react-router";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-gray-900 text-white">
      <h1 className="text-5xl mb-12 font-semibold text-center ">
        List of React Projects :
      </h1>

      <div className="flex flex-col items-center gap-6 text-3xl">
        <NavLink
          to="/accordian"
          className="px-8 py-4 border border-gray-700 rounded-lg hover:bg-gray-800 hover:text-cyan-400 transition-all duration-300 w-64 text-center"
        >
          Accordian
        </NavLink>

        <NavLink
          to="/colorgenerator"
          className="px-8 py-4 border border-gray-700 rounded-lg hover:bg-gray-800 hover:text-cyan-400 transition-all duration-300 w-64 text-center"
        >
          Color Generator
        </NavLink>

        <NavLink
          to="/starrating"
          className="px-8 py-4 border border-gray-700 rounded-lg hover:bg-gray-800 hover:text-cyan-400 transition-all duration-300 w-64 text-center"
        >
          Star Reviews
        </NavLink>

        <NavLink
          to="/imageslider"
          className="px-8 py-4 border border-gray-700 rounded-lg hover:bg-gray-800 hover:text-cyan-400 transition-all duration-300 w-64 text-center"
        >
          Image Slider
        </NavLink>

        <NavLink
          to="/loadmoredata"
          className="px-8 py-4 border border-gray-700 rounded-lg hover:bg-gray-800 hover:text-cyan-400 transition-all duration-300 w-64 text-center"
        >
          Load More Data
        </NavLink>
        
      </div>
    </div>
  );
}
