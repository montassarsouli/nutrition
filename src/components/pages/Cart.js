import { useSelector } from "react-redux";
import { IoIosCloseCircle } from "react-icons/io";

const Cart = () => {
  const cart = useSelector((state) => state.product.products);
  const total = useSelector((state) => state.product.total);
  console.log(cart, cart[0]);

  return (
    <div className="flex pt-24">
      <div className="w-2/3 grid grid-cols-2 gap-4">
        {cart.map((product) => (
          <div className="bg-gray-100">
            <div className="rounded-lg overflow-hidden shadow-lg bg-white flex">
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
            <IoIosCloseCircle />
          </div>
        ))}
      </div>
      <div className="lg:w-1/3 w-full bg-gray-100 p-4 rounded-lg shadow-lg mt-6 lg:mt-0">
        <h2 className="text-center text-xl font-bold mb-4">Produits</h2>
        {cart.map((product) => (
          <div
            key={product.id}
            className="flex justify-between px-4 py-2 border-b border-gray-300"
          >
            <div>{product.name}</div>
            <div>{product.price} DNT</div>
          </div>
        ))}
        <div className="flex justify-between px-4 py-2 mt-4 text-xl font-bold">
          <div>Total</div>
          <div>{total} DNT</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
