import React from "react";

const AddButton = ({ product }) => {
  const buttonHoverClass = product.inStock
    ? "hover:bg-green-700"
    : "hover:bg-red-700";
  return (
    <button
      className={`bg-blue-500 ${buttonHoverClass} text-white font-bold py-2 px-4 rounded end-0`}
    >
      Ajouter au panier
    </button>
  );
};

export default AddButton;
