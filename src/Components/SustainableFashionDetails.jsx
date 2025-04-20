import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router";
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from "./Provider/CartProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SustainableFashionDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/sustainable-fashion/${id}`)
      .then((res) => setProduct(res.data))
      .catch((error) =>
        console.error("Error fetching sustainable fashion details", error)
      );
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  if (!product) {
    return (
      <div className="text-center py-10">
        <span className="loading loading-spinner text-success"></span>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 bg-white shadow-lg rounded-xl mb-12 mt-12">
      <ToastContainer position="top-center" autoClose={2000} />
      
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-80 object-contain rounded-xl mb-6"
      />
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-lg font-semibold text-green-700 mb-2">
        Price: {product.price} BDT
      </p>

      <p className="text-gray-600 mb-1">
        <span className="font-medium">Category:</span> {product.category}
      </p>

      <p className="text-gray-600">
        {product.available ? "In Stock" : "Out of Stock"}
      </p>

      <div className="flex gap-2 mt-4">
        <button onClick={handleAddToCart} className="btn btn-success">
          Add To Cart <FiShoppingCart />
        </button>
        <Link to="/sustainable-fashion">
          <button className="btn btn-info">Back to products</button>
        </Link>
      </div>
    </div>
  );
};

export default SustainableFashionDetails;
