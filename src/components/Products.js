import React, { useState } from "react";
import data from "../data/db.json";
import ProductCard from "./ProductCard";
import FilterProducts from "./subComponent/FilterProducts";

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(data);

  const handleFilteredData = (filteredData) => {
    setFilteredProducts(filteredData);
  };

  return (
    <div className="flex">
      <div className="w-1/4 p-4 bg-gray-100 pt-8">
        <FilterProducts onFilter={handleFilteredData} data={data} />
      </div>
      <div className="w-3/4 flex flex-wrap justify-center pt-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
