import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import LogoNutrition from "../assets/icons/nutritionLogo.png";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };
  return (
    <nav className="bg-black p-4 px-40 fixed w-full">
      <div className="container mx-auto flex flex-1 items-center justify-between">
        <div className="text-white text-lg font-semibold flex items-center">
          <img
            src={LogoNutrition}
            alt="Nutrition Store"
            className="mr-2 w-10 h-10"
          />
          <h3>Nutrition Store</h3>
        </div>
        <ul className="flex">
          <li className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
            Accueil
          </li>
          <li className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
            Boutique
          </li>
          <li className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
            Services
          </li>
          <li className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
            Contact
          </li>
        </ul>
        <div className="relative">
          <input
            type="text"
            placeholder="Recherche"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600 w-full px-2 py-1"
          />
          <button
            onClick={handleSearch}
            className="absolute right-2 top-2 w-6 h-6 text-white"
          >
            <FaSearch className="text-black w-6 h-6" />
            {/* Using the React Icon here */}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
