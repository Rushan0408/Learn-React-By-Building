import { NavLink } from "react-router";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen w-screen bg-gray-900 text-white">
      <h1 className="text-5xl mb-12 font-semibold text-center text-cyan-300 mt-4 ">
        Learn By Building React Projects :
      </h1>

      <div className="flex flex-col gap-8 text-3xl mb-8">
        <NavLink
          to="/accordian"
          className="px-8 py-4 border border-gray-700 rounded-lg hover:bg-gray-800 hover:text-cyan-400 transition-all duration-300 text-center"
        >
          Accordian
        </NavLink>

        <NavLink
          to="/colorgenerator"
          className="px-8 py-4 border border-gray-700 rounded-lg hover:bg-gray-800 hover:text-cyan-400 transition-all duration-300 text-center"
        >
          Color Generator
        </NavLink>

        <NavLink
          to="/starrating"
          className="px-8 py-4 border border-gray-700 rounded-lg hover:bg-gray-800 hover:text-cyan-400 transition-all duration-300  text-center"
        >
          Star Reviews
        </NavLink>

        <NavLink
          to="/imageslider"
          className="px-8 py-4 border border-gray-700 rounded-lg hover:bg-gray-800 hover:text-cyan-400 transition-all duration-300  text-center"
        >
          Image Slider
        </NavLink>

        <NavLink
          to="/loadmoredata"
          className="px-8 py-4 border border-gray-700 rounded-lg hover:bg-gray-800 hover:text-cyan-46400 transition-all duration-300  text-center"
        >
          Load More Data
        </NavLink>

        <NavLink
          to="/treemenu"
          className="px-8 py-4 border border-gray-700 rounded-lg hover:bg-gray-800 hover:text-cyan-400 transition-all duration-300  text-center"
        >
          Tree Menu
        </NavLink>

        <NavLink
          to="/qrgenerator"
          className="px-8 py-4 border border-gray-700 rounded-lg hover:bg-gray-800 hover:text-cyan-400 transition-all duration-300  text-center"
        >
          QR code Generator
        </NavLink>


        <NavLink
          to="/localstorage"
          className="px-8 py-4 border border-gray-700 rounded-lg hover:bg-gray-800 hover:text-cyan-400 transition-all duration-300  text-center"
        >
          Local Storage 
        </NavLink>

        <NavLink
          to="/scrollindicator"
          className="px-8 py-4 border border-gray-700 rounded-lg hover:bg-gray-800 hover:text-cyan-400 transition-all duration-300  text-center"
        >
          Scroll Indicator
        </NavLink>

        <NavLink
          to="/tabs"
          className="px-8 py-4 border border-gray-700 rounded-lg hover:bg-gray-800 hover:text-cyan-400 transition-all duration-300  text-center"
        >
          Tabs
        </NavLink>

        <NavLink
          to="/modalpopup"
          className="px-8 py-4 border border-gray-700 rounded-lg hover:bg-gray-800 hover:text-cyan-400 transition-all duration-300  text-center"
        >
          Modal Popup
        </NavLink>

        <NavLink
          to="/githubsearch"
          className="px-8 py-4 border border-gray-700 rounded-lg hover:bg-gray-800 hover:text-cyan-400 transition-all duration-300  text-center"
        >
          Guthub Search
        </NavLink>

        <NavLink
          to="/searchautocomplete"
          className="px-8 py-4 border border-gray-700 rounded-lg hover:bg-gray-800 hover:text-cyan-400 transition-all duration-300  text-center"
        >
          Search Auto Complete
        </NavLink>

        <NavLink
          to="/tictactoe"
          className="px-8 py-4 border border-gray-700 rounded-lg hover:bg-gray-800 hover:text-cyan-400 transition-all duration-300  text-center"
        >
          Tic Tac Toe
        </NavLink>

        <NavLink
          to="/featureflag"
          className="px-8 py-4 border border-gray-700 rounded-lg hover:bg-gray-800 hover:text-cyan-400 transition-all duration-300  text-center"
        >
          FeatureFlags
        </NavLink>
        
      </div>
    </div>
  );
}
