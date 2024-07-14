import { addproduct } from "../../redux/productSlice";
import { useDispatch } from "react-redux";

const AddButton = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddProduct = () => {
    console.log(product);
    dispatch(addproduct({ product }));
  };

  const buttonHoverClass = product.inStock
    ? "hover:bg-green-700"
    : "hover:bg-red-700";
  return (
    <button
      className={`bg-blue-500 ${buttonHoverClass} text-white font-bold py-1 px-4 rounded-lg end-0 w-full mt-2`}
      onClick={handleAddProduct}
    >
      Ajouter au panier
    </button>
  );
};

export default AddButton;
