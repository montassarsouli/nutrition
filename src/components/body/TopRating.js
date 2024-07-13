import React, { useState, useEffect } from "react";
import data from "../../data/db.json";
import RatingCard from "../subComponent/RatingCard";

const TopRating = () => {
  const [products, setProducts] = useState([]);
  const topRated = data.sort((a, b) => b.rating - a.rating).slice(0, 5);
  useEffect(() => {
    setProducts(topRated);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Produits les mieux notés</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <RatingCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default TopRating;
