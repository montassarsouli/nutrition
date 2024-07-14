import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";

const ProductCard = () => {
  const cart = useSelector((state) => state.product.products);
  console.log(cart);

  return (
    <div>
      {cart.map((product) => {
        <div className="flex items-center justify-center h-screen">
          <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-24">
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white flex">
              <img
                className="w-80 h-40 object-cover"
                src={product.image}
                alt={product.name}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2 text-gray-900">
                  {product.name}
                </div>
                <p className="text-gray-700 text-base mb-4">
                  {product.description}
                </p>
                <div className="flex flex-wrap">
                  <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                    Prix: ${product.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>;
      })}
    </div>
  );
};

export default ProductCard;
