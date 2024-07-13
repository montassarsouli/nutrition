import React from "react";

const AddButton = ({ product }) => {
  const buttonHoverClass = product.inStock
    ? "hover:bg-green-700"
    : "hover:bg-red-700";
  return (
    <button
      className={`bg-blue-500 ${buttonHoverClass} text-white font-bold py-1 px-4 rounded-lg end-0 w-full mt-2`}
    >
      Ajouter au panier
    </button>
  );
};

export default AddButton;
