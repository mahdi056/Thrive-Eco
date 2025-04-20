import { useContext } from "react";
import { CartContext } from "./Provider/CartProvider";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + Number(item.price || 0), 0);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Your Cart ({cartItems.length} items)
      </h2>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">Your cart is empty.</div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white shadow-md p-4 rounded-xl"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-contain rounded-lg border"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-green-600 font-medium">{item.price} BDT</p>
                  <p className="text-sm text-gray-500 mt-1">{item.category}</p>
                </div>
                <button className="text-red-500 hover:text-red-700 transition">
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-10 text-right">
            <h3 className="text-xl font-semibold">
              Total: <span className="text-green-700">{calculateTotal()} BDT</span>
            </h3>
            <button className="mt-4 btn btn-success px-6">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
