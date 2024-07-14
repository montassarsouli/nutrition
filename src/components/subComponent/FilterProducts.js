import React, { useState } from "react";

const FilterProducts = ({ onFilter, data }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  // const handleFilter = (category, priceRange, brand) => {
  //   let filtered = data;

  //   if (category) {
  //     setSelectedCategory(category);
  //     filtered = filtered.filter((product) => product.category === category);
  //   }

  //   if (priceRange) {
  //     setSelectedPrice(priceRange);
  //     const [minPrice, maxPrice] = priceRange.split("-");
  //     filtered = filtered.filter(
  //       (product) =>
  //         product.price >= parseInt(minPrice) &&
  //         product.price <= parseInt(maxPrice)
  //     );
  //   }

  //   if (brand) {
  //     setSelectedBrand(brand);
  //     filtered = filtered.filter((product) => product.brand === brand);
  //   }

  //   onFilter(filtered);
  // };

  return (
    <div className="pt-12 border-r border-gray-200 shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Filtres</h2>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Categories</h3>
        <div>
          {["Whey", "Casein", "Vegan", "Keto"].map((category) => (
            <button
              key={category}
              className="block w-full text-left px-4 py-2 border-b hover:bg-blue-600 hover:text-white  transition duration-150 ease-in-out"
              onClick={() => {
                /*handleFilter(category, selectedPrice, selectedBrand)*/
              }}
              aria-label={`Filter by category ${category}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Marques</h3>
        <div>
          {["Optimum Nutrition", "Dymatize", "MuscleTech", "Orgain"].map(
            (brand) => (
              <button
                key={brand}
                className="block w-full text-left px-4 py-2 border-b hover:bg-blue-600 hover:text-white transition duration-150 ease-in-out"
                onClick={() => {
                  /*handleFilter(selectedCategory, selectedPrice, brand)*/
                }}
                aria-label={`Filter by brand ${brand}`}
              >
                {brand}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterProducts;
