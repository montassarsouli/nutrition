import React from "react";

const Promotion = ({ product }) => {
  let pricePromotion = ((100 - product.promotion) / 100) * product.price;
  return (
    <div>
      {product.promotion > 0 && (
        <div className="flex justify-between mt-2 bg-blue-100 text-blue-800 text-sm p-2 rounded-lg">
          <p>Promotion: {product.promotion}% off</p>
          <p>{pricePromotion.toFixed(2)} DNT</p>
        </div>
      )}
    </div>
  );
};

export default Promotion;
