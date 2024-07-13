import React from "react";
import { useParams } from "react-router";

const SingleProduct = ({ product }) => {
  const { id } = useParams();
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
      <img
        className="w-full h-48 object-cover"
        src={product.image}
        alt={product.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Price: ${product.price}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Rating: {product.rating}
        </span>
        {product.promotion > 0 && (
          <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2">
            Promotion: {product.promotion}%
          </span>
        )}
        <span
          className={`inline-block px-3 py-1 text-sm font-semibold rounded-full mr-2 mb-2 ${
            product.inStock
              ? "bg-green-200 text-green-700"
              : "bg-red-200 text-red-700"
          }`}
        >
          {product.inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>
    </div>
  );
};

export default SingleProduct;
