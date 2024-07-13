import React from "react";
import AddButton from "./subComponent/AddButton";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const stockClass = product.inStock ? "text-green-500" : "text-red-500";

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex flex-col">
      <Link to={`/boutique/${product.id}`}>
        <img className="w-full" src={product.image} alt={product.name} />
      </Link>
      <div className="px-6 pt-4 flex-grow">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">
          Description: {product.description}
        </p>
        <p className="text-gray-700 text-base">Prix: {product.price} DNT</p>
        <p className="text-gray-700 text-base">Rating: {product.rating}</p>
        <p className={`text-base ${stockClass}`}>
          En stock: {product.inStock ? "Oui" : "Non"}
        </p>
      </div>
      <div className="px-6 pt-2 pb-2">
        <AddButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
