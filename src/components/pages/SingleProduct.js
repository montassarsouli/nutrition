import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import products from "../../data/db.json";
import NotFoundPage from "./NotFoundPage";
import { FaStar } from "react-icons/fa";
import AddButton from "../subComponent/AddButton";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState("");

  useEffect(() => {
    const foundProduct = products.find(
      (product) => product.id === parseInt(id)
    );
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <NotFoundPage />;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-24">
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
        <img
          className="w-full h-64 object-cover"
          src={product.image}
          alt={product.name}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2 text-gray-900">
            {product.name}
          </div>
          <p className="text-gray-700 text-base mb-4">{product.description}</p>
          <div className="flex flex-wrap">
            <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
              Prix: ${product.price}
            </span>
            <span className="inline-block bg-yellow-100 text-yellow-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 flex items-center justify-between">
              <span>Note: {product.rating}</span>
              <FaStar className="pl-1" />
            </span>
            {product.promotion > 0 && (
              <span className="inline-block bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                Promotion: {product.promotion}%
              </span>
            )}
            <span
              className={`inline-block px-3 py-1 text-sm font-semibold rounded-full mr-2 mb-2 ${
                product.inStock
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {product.inStock ? "Disponible" : "Rupture"}
            </span>
          </div>
        </div>
        <AddButton product={product} />
      </div>
    </div>
  );
};

export default SingleProduct;
