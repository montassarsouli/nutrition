import React, { useState, useEffect } from "react";
import data from "../../data/db.json";
import { FaStar } from "react-icons/fa";

const TopRating = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const topRated = data.sort((a, b) => b.rating - a.rating).slice(0, 5);
    setProducts(topRated);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Top Rated Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border bg-white p-2 rounded-lg shadow hover:shadow-md transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <div className="flex items-center">
              <p className="text-md font-medium mr-2">Rating:</p>
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className={`h-5 w-5 `} />
              ))}
            </div>
            {/* Conditional rendering to show promotion if it's greater than 0 */}
            {product.promotion > 0 && (
              <div className="mt-2 bg-blue-100 text-blue-800 text-sm p-2 rounded-lg">
                Promotion: {product.promotion}% off
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default TopRating;
