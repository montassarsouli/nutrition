import React, { useState } from "react";

const FilterProducts = ({ onFilter, data }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  const handleFilter = (category, priceRange, brand) => {
    let filtered = data;

    if (category) {
      setSelectedCategory(category);
      filtered = filtered.filter((product) => product.category === category);
    }

    if (priceRange) {
      setSelectedPrice(priceRange);
      const [minPrice, maxPrice] = priceRange.split("-");
      filtered = filtered.filter(
        (product) =>
          product.price >= parseInt(minPrice) &&
          product.price <= parseInt(maxPrice)
      );
    }

    if (brand) {
      setSelectedBrand(brand);
      filtered = filtered.filter((product) => product.brand === brand);
    }

    onFilter(filtered);
  };

  return (
    <div className="p-4 border-r border-gray-200 shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Filters</h2>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Categories</h3>
        <div>
          {["Whey", "Casein", "Vegan", "Keto"].map((category) => (
            <button
              key={category}
              className={`block w-full text-left px-4 py-2 border-b ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-800"
              } hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out`}
              onClick={() =>
                handleFilter(category, selectedPrice, selectedBrand)
              }
              aria-label={`Filter by category ${category}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Price</h3>
        <div className="h-32 overflow-y-scroll border border-gray-300 rounded p-2">
          {["0-50", "51-100", "101-150", "151-200"].map((priceRange) => (
            <button
              key={priceRange}
              className={`block w-full text-left px-4 py-2 border-b ${
                selectedPrice === priceRange
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-800"
              } hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out`}
              onClick={() =>
                handleFilter(selectedCategory, priceRange, selectedBrand)
              }
              aria-label={`Filter by price range ${priceRange}`}
            >
              {priceRange}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Brands</h3>
        <div>
          {[
            "Optimum Nutrition",
            "Dymatize",
            "MuscleTech",
            "Orgain",
            "Isopure",
            "MyProtein",
            "Vega",
            "Ancient Nutrition",
            "BSN",
            "Garden of Life",
          ].map((brand) => (
            <button
              key={brand}
              className={`block w-full text-left px-4 py-2 border-b ${
                selectedBrand === brand
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-800"
              } hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out`}
              onClick={() =>
                handleFilter(selectedCategory, selectedPrice, brand)
              }
              aria-label={`Filter by brand ${brand}`}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterProducts;
