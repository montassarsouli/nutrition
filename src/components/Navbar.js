import React, { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import LogoNutrition from "../assets/icons/nutritionLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };
  return (
    <nav className="bg-black p-4 px-40 fixed w-full z-10">
      <div className="container mx-auto flex flex-1 items-center justify-between">
        <div className="text-white text-lg font-semibold flex items-center">
          <img
            src={LogoNutrition}
            alt="Nutrition Store"
            className="mr-2 w-10 h-10 transition-transform duration-300 hover:scale-110"
          />
          <h3>Nutrition Store</h3>
        </div>
        <ul className="flex cursor-pointer">
          <Link
            to="/"
            className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300"
          >
            Accueil
          </Link>
          <Link
            to="/boutique"
            className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
          >
            Boutique
          </Link>
          <Link
            to="/services"
            className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
          >
            Contact
          </Link>
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
          </button>
        </div>
        <Link to="/cart" className="text-white text-lg">
          <FaShoppingCart className="text-yellow-400 w-8 h-8" />
          Panier
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
