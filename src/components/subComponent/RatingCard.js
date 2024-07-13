import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Promotion from "./Promotion";
import AddButton from "./AddButton";

const RatingCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      key={product.id}
      className="border bg-white p-2 rounded-lg shadow hover:shadow-md transition-shadow duration-300"
      title={`Notes: ${product.rating}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <div className="flex items-center" title={`Notes: ${product.rating}`}>
          <p className="text-md font-medium mr-2">Notes:</p>
          {[...Array(Math.floor(product.rating)).keys()].map((_, index) => (
            <FaStar className="text-yellow-400" key={index} />
          ))}
          {product.rating % 1 !== 0 && (
            <FaStarHalfAlt className="text-yellow-400" />
          )}
          {[...Array(Math.max(0, 5 - Math.ceil(product.rating))).keys()].map(
            (_, index) => (
              <FaRegStar className="text-yellow-400" key={index} />
            )
          )}
        </div>
        <p className="text-md font-medium mr-2">Prix: {product.price} DNT</p>
      </div>
      {isHovered ? (
        <AddButton product={product} />
      ) : product.promotion > 0 ? (
        <Promotion product={product} />
      ) : null}
    </div>
  );
};

export default RatingCard;
