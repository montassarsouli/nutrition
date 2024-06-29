import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black p-4 ">
      <div className="container mx-auto flex items-center">
        <div className="text-white text-lg font-semibold">
          <img src="" alt="" />
          <h3>Nutrition Store</h3>
        </div>
        <ul className="flex mx-auto hover:cursor-pointer">
          <li className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-lg font-medium ">
            Accueil
          </li>
          <li className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-lg font-medium ">
            Boutique
          </li>
          <li className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-lg font-medium ">
            Services
          </li>
          <li className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-lg font-medium ">
            Contact
          </li>
        </ul>
        <div className="relative">
          <input
            type="text"
            placeholder="Recherche"
            className="text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-red focus:border-indigo-600w-full px-2 py-1"
          />
          <img
            className="absolute right-2 top-2 w-6 h-6"
            src="./images/search-outline.svg"
            alt="search-icon"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
