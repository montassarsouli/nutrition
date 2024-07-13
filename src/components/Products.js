// Products.js
import React from "react";
import data from "../data/db.json";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div className="flex flex-wrap justify-center pt-4">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
